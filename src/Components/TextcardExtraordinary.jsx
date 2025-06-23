export default function TextcardExtraordinary({ title, discription }) {
  return (
    <div className=" backdrop-blur bg-accent/20 space-y-4 rounded p-4">
      <h1 className="font-semibold capitalize ">{title}</h1>
      <p>{discription}</p>
    </div>
  );
}
