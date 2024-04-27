import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewDetailsPage = () => {
  const {id} = useParams();
  const [item,setItem] = useState({});

  useEffect(()=>{
    fetch(`http://localhost:5000/paperGlasses/${id}`)
    .then(res=>res.json())
    .then(data=>{
      setItem(data)
    })
    .catch(error=>console.error(error))
  },[id])

  const {
      image,
      item_name,
      subcategory_Name,
      price,
      rating,
      processing_time,
      customization,
      stockStatus,
      short_description,
      user_name,
      user_email,
    } = item || {}


  console.log(item);
  return (
    <div>
      <Card className="lg:flex-row flex-col w-full shadow-none">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 lg:w-2/5 w-full hero  shrink-0 bg-[#1313130D] p-10 rounded-r-none"
        >
          <img
            src={image}
            alt="Item Image"
            className="lg:w-full object-cover"
          />
        </CardHeader>
        <CardBody className="space-y-7">
          <h2 className="font-bold text-4xl text-[#131313] #131313 playfair-display">
            {item_name}
          </h2>
          <div className="flex items-center gap-5">
            <Typography variant="h6" className="">
              By : {user_name}
            </Typography>
            <Typography variant="h6" className="">
              Email : {user_email}
            </Typography>
          </div>
          <div className="border-b-2 border-[#13131326]"></div>
          <Typography variant="h6" className="mb-4">
            {subcategory_Name}
          </Typography>
          <div className="border-b-2 border-[#13131326]"></div>
          <Typography variant="small" className="">
            <b className="font-bold">Description:</b> {short_description}
          </Typography>

          <div className="space-x-3 ">
            <b>Stock Status</b>
            <Button className="bg-[#17BE0A0D] text-[#23BE0A] font-medium capitalize">
              {stockStatus}
            </Button>
          </div>
          <p className="flex items-center gap-3">
            <span> Price:</span>
            <b>${price}</b>
          </p>
          <p className="flex items-center gap-3">
            <span>Rating:</span>
            <b>{rating}</b>
          </p>
          <p className="flex items-center gap-3">
            <span>Customization:</span>
            <b>{customization}</b>
          </p>
          <p className="flex items-center gap-3">
            <span>Processing Time:</span>
            <b>{processing_time}</b>
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default ViewDetailsPage;
