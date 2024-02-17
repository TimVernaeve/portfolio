const Project = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="font-body flex h-full flex-col p-8 gap-8">
      <h1>Project: {params.slug}</h1>
    </div>
  );
};

export default Project;
