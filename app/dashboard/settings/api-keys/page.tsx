"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Plus,
  Copy,
  Trash2,
  Key,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle
} from "lucide-react";
import { createApiKey, getApiKeysForUser, revokeApiKey } from './actions';
import { toast } from 'sonner';

interface ApiKey {
  id: string;
  name: string;
  createdAt: Date;
  lastUsedAt: Date | null;
  partialKey: string;
}

interface CreateKeyResponse {
  success: boolean;
  key?: string;
  id?: string;
  createdAt?: Date;
  error?: string;
}

interface GetKeysResponse {
  success: boolean;
  keys?: ApiKey[];
  error?: string;
}

export default function ApiKeysPage() {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [newKeyName, setNewKeyName] = useState('');
  const [creating, setCreating] = useState(false);
  const [createdKey, setCreatedKey] = useState<{ key: string; id: string } | null>(null);
  const [revokingKey, setRevokingKey] = useState<string | null>(null);

  // Load API keys on component mount
  useEffect(() => {
    loadApiKeys();
  }, []);

  const loadApiKeys = async () => {
    setLoading(true);
    setError(null);

    try {
      const result: GetKeysResponse = await getApiKeysForUser();
      if (result.success && result.keys) {
        setApiKeys(result.keys);
      } else {
        setError(result.error || 'Failed to load API keys');
      }
    } catch (err) {
      setError('An unexpected error occurred');
      console.error('Error loading API keys:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateKey = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newKeyName.trim()) {
      toast.error('Please enter a name for the API key');
      return;
    }

    setCreating(true);

    try {
      const result: CreateKeyResponse = await createApiKey(newKeyName.trim());

      if (result.success && result.key && result.id) {
        setCreatedKey({ key: result.key, id: result.id });
        setNewKeyName('');
        toast.success('API key created successfully');

        // Reload the keys list
        await loadApiKeys();
      } else {
        toast.error(result.error || 'Failed to create API key');
      }
    } catch (err) {
      toast.error('An unexpected error occurred');
      console.error('Error creating API key:', err);
    } finally {
      setCreating(false);
    }
  };

  const handleCopyKey = async (key: string) => {
    try {
      await navigator.clipboard.writeText(key);
      toast.success('API key copied to clipboard');
    } catch (err) {
      toast.error('Failed to copy to clipboard');
      console.error('Error copying key:', err);
    }
  };

  const handleRevokeKey = async (keyId: string) => {
    if (!confirm('Are you sure you want to revoke this API key? This action cannot be undone.')) {
      return;
    }

    setRevokingKey(keyId);

    try {
      const result = await revokeApiKey(keyId);

      if (result.success) {
        toast.success('API key revoked successfully');
        // Remove the key from the list
        setApiKeys(prev => prev.filter(key => key.id !== keyId));
      } else {
        toast.error(result.error || 'Failed to revoke API key');
      }
    } catch (err) {
      toast.error('An unexpected error occurred');
      console.error('Error revoking API key:', err);
    } finally {
      setRevokingKey(null);
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const closeCreateDialog = () => {
    setCreateDialogOpen(false);
    setNewKeyName('');
    setCreatedKey(null);
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">API Keys</h1>
          <p className="text-muted-foreground">
            Manage your API keys for accessing the application programmatically
          </p>
        </div>

        <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create New Key
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Create API Key</DialogTitle>
              <DialogDescription>
                {createdKey
                  ? "Your new API key has been created. Copy it now as it won't be shown again."
                  : "Enter a name to identify your API key"
                }
              </DialogDescription>
            </DialogHeader>

            {!createdKey ? (
              <form onSubmit={handleCreateKey} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="keyName">Key Name</Label>
                  <Input
                    id="keyName"
                    placeholder="e.g., Production API Key"
                    value={newKeyName}
                    onChange={(e) => setNewKeyName(e.target.value)}
                    disabled={creating}
                    required
                  />
                </div>

                <div className="flex justify-end space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCreateDialogOpen(false)}
                    disabled={creating}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={creating}>
                    {creating ? 'Creating...' : 'Create Key'}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Important:</strong> Copy this key now and store it securely.
                    It won't be shown again for security reasons.
                  </AlertDescription>
                </Alert>

                <div className="bg-muted p-3 rounded-md font-mono text-sm break-all">
                  {createdKey.key}
                </div>

                <div className="flex justify-end space-x-2">
                  <Button
                    onClick={() => handleCopyKey(createdKey.key)}
                    className="flex-1"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Key
                  </Button>
                  <Button variant="outline" onClick={closeCreateDialog}>
                    Done
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Key className="w-5 h-5 mr-2" />
            Your API Keys
          </CardTitle>
          <CardDescription>
            These keys allow programmatic access to your account. Keep them secure and never share them publicly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-8 w-full" />
                </div>
              ))}
            </div>
          ) : error ? (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : apiKeys.length === 0 ? (
            <div className="text-center py-12">
              <Key className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No API keys yet</h3>
              <p className="text-muted-foreground mb-4">
                Create your first API key to start using the application programmatically.
              </p>
              <Button onClick={() => setCreateDialogOpen(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Create Your First Key
              </Button>
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>API Key</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Last Used</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {apiKeys.map((key) => (
                    <TableRow key={key.id}>
                      <TableCell className="font-medium">{key.name}</TableCell>
                      <TableCell>
                        <code className="bg-muted px-2 py-1 rounded text-xs">
                          {key.partialKey}
                        </code>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(key.createdAt)}
                        </div>
                      </TableCell>
                      <TableCell>
                        {key.lastUsedAt ? (
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 mr-1" />
                            {formatDate(key.lastUsedAt)}
                          </div>
                        ) : (
                          <Badge variant="secondary">Never used</Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleRevokeKey(key.id)}
                          disabled={revokingKey === key.id}
                        >
                          {revokingKey === key.id ? (
                            '...'
                          ) : (
                            <>
                              <Trash2 className="w-4 h-4 mr-1" />
                              Revoke
                            </>
                          )}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}