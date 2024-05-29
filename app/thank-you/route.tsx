export async function POST(request: Request) {
  const formData = await request.formData();
  const email = formData.get('email');
  console.log(email);
  return new Response('Email received', { status: 200 });
}

export async function GET(request: Request) {
  const formData = await request.formData();
  const email = formData.get('email');
  console.log(email);
  return new Response('Hello, World!');
}