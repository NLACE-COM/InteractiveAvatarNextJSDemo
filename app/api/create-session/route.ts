import { supabase } from '@/app/lib/supabase';

export async function POST(request: Request) {
  try {
    const { name, email, language } = await request.json();
    const { data, error } = await supabase
      .from('sessions')
      .insert({ name, email, language })
      .select('id')
      .single();

    if (error) throw error;

    return Response.json({ sessionId: data.id });
  } catch (err) {
    console.error('Error creating session:', err);
    return new Response('Failed to create session', { status: 500 });
  }
}
