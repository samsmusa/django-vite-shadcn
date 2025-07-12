import {UIConfig} from "@/interfaces/ui";


const Banner = ({banner}: { banner: UIConfig }) => {
    console.log("banner", banner);
    return (
        <a href={banner.url}>
            <img
                src={banner.image}
                alt="product"
                className="object-cover object-center w-full"
            />
        </a>
    );
};

export default Banner;