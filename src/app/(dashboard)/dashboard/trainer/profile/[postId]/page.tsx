import PostEditComponent from "../_components/post";

export default function NamePage({ params }: { params: { postId: string } }) {
  return (
    <div className="w-full h-full">
      <h1> Pausar Post: {params.postId} y analticias y Boton para editar</h1>
      
      <PostEditComponent />
    </div>
  );
}
