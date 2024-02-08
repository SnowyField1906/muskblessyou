import { RiTwitterXLine } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
	{
		id: "0",
		name: "The Fool",
		image: "0_thefool",
	},
	{
		id: "I",
		name: "The Magician",
		image: "1_themagician",
	},
	{
		id: "II",
		name: "The High Priestess",
		image: "2_thehighpriestess",
	},
	{
		id: "III",
		name: "The Empress",
		image: "3_theempress",
	},
	{
		id: "IV",
		name: "The Emperor",
		image: "4_theemperor",
	},
	{
		id: "V",
		name: "The Hierophant",
		image: "5_thehierophant",
	},
	{
		id: "VI",
		name: "The Lovers",
		image: "6_thelovers",
	},
	{
		id: "VII",
		name: "The Chariot",
		image: "7_thechariot",
	},
	{
		id: "VIII",
		name: "Strength",
		image: "8_strength",
	},
	{
		id: "IX",
		name: "The Hermit",
		image: "9_thehermit",
	},
	{
		id: "X",
		name: "Wheel of Fortune",
		image: "10_wheeloffortune",
	},
	{
		id: "XI",
		name: "Justice",
		image: "11_justice",
	},
	{
		id: "XII",
		name: "The Hanged Man",
		image: "12_thehangedman",
	},
	{
		id: "XIII",
		name: "Death",
		image: "13_death",
	},
	{
		id: "XIV",
		name: "Temperance",
		image: "14_temperance",
	},
	{
		id: "XV",
		name: "The Devil",
		image: "15_thedevil",
	},
	{
		id: "XVI",
		name: "The Tower",
		image: "16_thetower",
	},
	{
		id: "XVII",
		name: "The Star",
		image: "17_thestar",
	},
	{
		id: "XVIII",
		name: "The Moon",
		image: "18_themoon",
	},
	{
		id: "XIX",
		name: "The Sun",
		image: "19_thesun",
	},
	{
		id: "XX",
		name: "Judgement",
		image: "20_judgement",
	},
	{
		id: "XXI",
		name: "The World",
		image: "21_theworld",
	},
];

function App() {
	const settings = {
		speed: 500,
		slidesToShow: 9,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1500,
		pauseOnHover: true,
		nextArrow: <></>,
		prevArrow: <></>,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 6,
				},
			},
			{
				breakpoint: 1290,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<div className="bg-gray-950 h-screen w-screen flex flex-col p-5 justify-between overflow-hidden">
			<div className="place-self-end flex space-x-4 text-white text-3xl">
				<p className="font-bold text-xl">Follow us:</p>
				<a
					href="https://twitter.com/BlessingMusk404"
					target="_blank"
					rel="noreferrer"
				>
					<RiTwitterXLine />
				</a>
				<a href="https://t.me/blessingmusk404" target="_blank" rel="noreferrer">
					<FaTelegram />
				</a>
				<a
					href="https://github.com/LECLE-Youngz"
					target="_blank"
					rel="noreferrer"
				>
					<FaGithub />
				</a>
			</div>
			<div className="lg:text-4xl text-xl text-center mx-auto font-extralight tracking-tighter space-y-5 text-amber-200">
				<p>Musk bless you.. Musk bless you.. Musk bless you..</p>
				<img src="/assets/banner.png" className="mx-auto" />
				<p>Musk bless you.. Musk bless you.. Musk bless you..</p>
			</div>
			<div className="text-2xl mx-auto font-extralight tracking-tighter space-y-5 text-amber-200">
				<div className="container w-screen flex">
					<Slider
						{...settings}
						className="w-full flex justify-center items-center"
					>
						{cards.map((card) => (
							<div className="grid" key={card.id}>
								<p className="text-center text-lg">{card.id}</p>
								<img
									src={`/assets/cards/${card.image}.jpeg`}
									alt={card.name}
									className="w-32 h-32 mx-auto"
								/>
								<p className="text-center text-lg">{card.name}</p>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
}

export default App;
