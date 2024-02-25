import CommentList from "./components/CommentList";

export default function App() {
  // console.log(ApiData.comments);
  return (
    <div className="h-full w-full bg-neutral-900 text-neutral-50">
      <h1>Hello cmnt</h1>
      <CommentList />
    </div>
  );
}
