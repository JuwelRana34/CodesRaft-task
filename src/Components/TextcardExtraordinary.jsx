export default function TextcardExtraordinary({title, discription, isRight=null}) {
  return (
    <div className={`${isRight && "md:text-right"}  space-y-4 py-2`}>
      <div className=" ">
        <h1 className="font-semibold capitalize text-textColor">
          {title}
        </h1>
        <p className="text-paragraph">
          {discription}
         
        </p>
      </div>
    </div>
  );
}
