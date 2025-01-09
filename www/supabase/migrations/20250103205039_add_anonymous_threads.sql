-- Create posts table if not exists
CREATE TABLE IF NOT EXISTS posts (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  content TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('news', 'personal_opinion')),
  author TEXT DEFAULT 'anonymous',
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS but allow public access
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public access"
ON posts
FOR ALL
TO public
USING (true)
WITH CHECK (true); 