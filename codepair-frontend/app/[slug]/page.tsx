'use client';

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return <p>{slug}</p>;
}
