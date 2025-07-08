import React from "react";
import { useShop } from "../../context/ProductContext";
import chat from "../../assets/Facebook.svg";
import chat3 from "../../assets/Twitter.svg";
import chat2 from "../../assets/Linkedin (1).svg";
import { FaRegStar } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import scss from "./DetailsPage.module.scss";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BlogPosts from "../../home/BlogPosts";
const DetailsPage = () => {
  const { oneTask, Task, addToCart } = useShop();

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    Task(id);
  }, []);

  const handleCart = () => {
    if (oneTask) {
      addToCart({ ...oneTask, count: 1 });
      navigate("/cart");
    }
  };

  return (
    <div className="container">
      <div className={scss.block}>
        <div className={scss.page}>
          <p onClick={() => navigate("/")}>home</p>/<p>shop</p>
        </div>
        <div className={scss.plants_box}>
          <img className={scss.image} src={oneTask.link} alt="" />
          <div className={scss.information}>
            <h1>{oneTask.name}</h1>
            <div className={scss.l}>
              <p>{oneTask.price}$</p>
              <p>
                <div className={scss.star}>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <h3>19 Customer Review</h3>
                </div>
              </p>
            </div>
            <h3>Short Description:</h3>
            <p>
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground.
            </p>
            <div className={scss.btns}>
              <button>Buy NOW</button>
              <button onClick={handleCart}>Add to cart</button>
            </div>
            <div className={scss.star1}>
              <span>
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </span>
              <h3>19 Customer Review</h3>
            </div>
            <p>SKU: 1995751877966</p>
            <p>
              Categories: <span>{oneTask.plants}</span>
            </p>
            <p>Tags: Home, Garden, Plants</p>
            <div className={scss.products}>
              <h3>Share this products:</h3>
              <img src={chat} alt="" />
              <img src={chat2} alt="" />
              <img src={chat3} alt="" />
              <FaMessage style={{ color: "green" }} />
            </div>
          </div>
        </div>
        <div className={scss.description}>
          <div className={scss.rout}>
            <h3>Product Description</h3>
            <h3>Reviews (19)</h3>
          </div>
          <p>
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla augue nec est tristique auctor. Donec non est at libero
            vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
            Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
          </p>
          <br />
          <p className={scss.p}>
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
            sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
            Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis
            vulputate, sapien libero hendrerit est, sed commodo augue nisi non
            neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in
            accumsan elit odio quis mi. Cras neque metus, consequat et blandit
            et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet
            ligula euismod eget. The ceramic cylinder planters come with a
            wooden stand to help elevate your plants off the ground.{" "}
          </p>
          <br />
          <h2>Living Room:</h2>
          <p>
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <br />
          <h2>Dining Room:</h2>
          <p>
            The benefits of houseplants are endless. In addition to cleaning the
            air of harmful toxins, they can help to improve your mood, reduce
            stress and provide you with better sleep. Fill every room of your
            home with houseplants and their restorative qualities will improve
            your life.
          </p>
          <br />
          <h2>Office:</h2>
          <p>
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <BlogPosts />
      </div>
    </div>
  );
};

export default DetailsPage;
