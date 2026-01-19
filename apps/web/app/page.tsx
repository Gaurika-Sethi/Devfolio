'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [apiStatus, setApiStatus] = useState<{
    status: string;
    loading: boolean;
    error: string | null;
  }>({
    status: '',
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const response = await fetch('http://localhost:8000/health');
        if (response.ok) {
          const data = await response.json();
          setApiStatus({
            status: data.status,
            loading: false,
            error: null,
          });
        } else {
          setApiStatus({
            status: '',
            loading: false,
            error: `HTTP ${response.status}`,
          });
        }
      } catch (error) {
        setApiStatus({
          status: '',
          loading: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        });
      }
    };

    fetchHealth();
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8">
        <h1 className="text-4xl font-bold text-center">DevPilot Web is running</h1>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">API Status</h2>
          {apiStatus.loading ? (
            <p className="text-gray-600 dark:text-gray-400">Loading...</p>
          ) : apiStatus.error ? (
            <p className="text-red-600 dark:text-red-400">Error: {apiStatus.error}</p>
          ) : (
            <p className="text-green-600 dark:text-green-400">
              Status: {apiStatus.status}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
