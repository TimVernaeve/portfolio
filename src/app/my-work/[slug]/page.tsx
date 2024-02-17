const Project = ({ params }: { params: { slug: string } }) => {
  return (
    <main className="font-body flex h-full flex-col p-8 gap-8">
      <h1>Project: {params.slug}</h1>
    </main>
  );
};

export default Project;
