import Image from "next/image";

const Footer = () => {
    return (
        <footer className=" bg-gray-700 text-white  text-center">
            Connect with me! <br />
            <div className="flex justify-center">
                <a
                    href="https://github.com/BestVersion7"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github"
                >
                    <Image
                        height={60}
                        width={60}
                        // layout="responsive"
                        src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1556071829/230419%20Icons/github.png"
                        alt="github"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/hunterkfan"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                >
                    <Image
                        height={60}
                        width={60}
                        // layout="fill"
                        src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1603470384/230419%20Icons/logo-linkedin.png"
                        alt="linkedin"
                    />
                </a>
            </div>
            2024 - <b>www.hunterkf.com</b>
        </footer>
    );
};

export default Footer;
