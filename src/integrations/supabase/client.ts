// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ghgxyqwcncdgfsshnshh.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoZ3h5cXdjbmNkZ2Zzc2huc2hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyNzI4OTcsImV4cCI6MjA2MDg0ODg5N30.fBKDTSceQzL3cOb-l3a_sKhYgl7p2rcFiv9n-S8DynQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
