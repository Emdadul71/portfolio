import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
interface propsTypes {
  isLayoutColumn?: boolean;
}

const dummyData = [
  {
    icon: <FiTwitter className="text-sm lg:text-lg" />,
    link: "#",
  },
  {
    icon: <FiFacebook className="text-sm lg:text-lg" />,
    link: "#",
  },
  {
    icon: <FiYoutube className="text-sm lg:text-lg" />,
    link: "#",
  },
  {
    icon: <FiInstagram className="text-sm lg:text-lg" />,
    link: "#",
  },
];

const SocialLinks = ({ isLayoutColumn = false }: propsTypes) => {
  return (
    <div>
      <div className="flex justify-center items-center gap-2">
        <ul
          className={`flex items-center gap-3 lg:gap-2 ${
            isLayoutColumn ? "flex-col gap-0" : ""
          }`}
        >
          {dummyData?.map((item: any, i: any) => {
            return (
              <li key={i}>
                <a
                  target="_blank"
                  className="block px-1 text-lg pt-1 text-white hover:text-secondary"
                  href={item?.link}
                  rel="nofollow"
                >
                  {item?.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;
