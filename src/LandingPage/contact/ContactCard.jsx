const ContactCard = (props) => {
  return (
    <>
      <div className=" flex items-center gap-4 py-2 my-4 px-10">
        {props.contactIcon}
        <div>
          <h1 className="text-xl font-bold">{props.call}</h1>
          <h1 className="text-gray-700 font-medium pt-2">{props.contact1}</h1>

          <h1 className="text-gray-700 font-medium">{props.contact2}</h1>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
