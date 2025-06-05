import { supabase } from '@/app/lib/supabase';

export async function POST(request: Request) {
  try {
    const { sessionId, content } = await request.json();
    const { error } = await supabase
      .from('messages')
      .insert({ session_id: sessionId, content });

    if (error) throw error;

    return Response.json({ success: true });
  } catch (err) {
    console.error('Error saving message:', err);
    return new Response('Failed to save message', { status: 500 });
  }
}
