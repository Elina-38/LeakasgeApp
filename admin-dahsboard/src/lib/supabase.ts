import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for the database schema
export interface WaterReport {
  id: string;
  user_id: string;
  issue_type: 'leakage' | 'water_quality_problem' | 'other'; // Standardized
  severity: 'low' | 'medium' | 'high' | 'critical'; // Standardized
  description: string;
  location_address?: string | null; // For manual text address
  latitude?: number | null; // Optional if manual address is provided
  longitude?: number | null; // Optional if manual address is provided
  image_url?: string | null; // DEPRECATED: Standardized and optional
  image_urls?: string[] | null; // To store multiple image URLs
  status: 'pending' | 'in_progress' | 'resolved'; // Standardized
  assigned_to?: string;
  created_at: string;
  updated_at: string;
  user?: {
    email: string;
    full_name?: string;
    is_banned?: boolean; // Added is_banned
  };
}

export interface User {
  id: string;
  email: string;
  full_name?: string;
  role: 'user' | 'admin' | 'technician';
  is_banned: boolean;
  created_at: string;
}