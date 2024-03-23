const product = [
	{
		image: "https://i.ibb.co/nDxkfyn/shirt1.jpg",
		rating: 3.8,
		price: 1100,
		type: "Shirt"
	},
	{
		image: "https://i.ibb.co/GHwNLh9/shirt2.jpg",
		rating: 4.8,
		price: 1400,
		type: "Shirt"
	},
	{
		image: "https://i.ibb.co/nz4qrt3/shirt3.webp",
		rating: 2.5,
		price: 1500,
		type: "Shirt"
	},
	{
		image: "https://i.ibb.co/pQTbV23/shirt4.jpg",
		rating: 4.2,
		price: 400,
		type: "Shirt"
	},
	{
		image: "https://i.ibb.co/DD0QqHs/shirt5.jpg",
		rating: 4.3,
		price: 600,
		type: "Shirt"
	},
	{
		image: "https://i.ibb.co/ry6yGQr/shirt6.jpg",
		rating: 4.7,
		price: 7,
		type: "Shirt"
	},
	{
		image: "https://i.ibb.co/tZKRsNw/lower1.jpg",
		rating: 2.8,
		price: 800,
		type: "Lower"
	},
	{
		image: "https://i.ibb.co/Lr1z07W/lower2.jpg",
		rating: 5.2,
		price: 300,
		type: "Lower"
	},
	{
		image: "https://i.ibb.co/bHT87JG/lower3.jpg",
		rating: 1.8,
		price: 1100,
		type: "Lower"
	},
	{
		image: "https://i.ibb.co/PD9jssj/jeans1.jpg",
		rating: 4.2,
		price: 2200,
		type: "Jeanes"
	},
	{
		image: "https://i.ibb.co/ZTb9ZcG/jeans2.jpg",
		rating: 5.7,
		price: 2800,
		type: "Jeanes"
	},
	{
		image: "https://i.ibb.co/PT2xLWT/jeans3.jpg",
		rating: 7.4,
		price: 900,
		type: "Jeanes"
	},
	{
		image: "https://i.ibb.co/Ypp4wrF/jeans4.jpg",
		rating: 5.3,
		price: 1500,
		type: "Jeanes"
	},
	{
		image: "https://i.ibb.co/KVtxjML/jeans5.jpg",
		rating: 2.2,
		price: 2100,
		type: "Jeanes"
	},
	{
		image: "https://i.ibb.co/f1HSxRC/jeans6.jpg",
		rating: 5.5,
		price: 1700,
		type: "Jeanes"
	},
	{
		image: "https://i.ibb.co/GQqf8rs/jeans7.jpg",
		rating: 2.4,
		price: 1300,
		type: "Jeanes"
	},
	{
		image: "https://i.ibb.co/Yp5tpps/jeans8.jpg",
		rating: 4.9,
		price: 900,
		type: "Jeanes"
	},
	{
		img: "https://i.ibb.co/RcFtHx9/T-shirt1.webp",
		rating: 1.0,
		price: 350,
		type: "T-Shirt"
	},
	{
		image: "https://i.ibb.co/NtkJ2yS/T-shirt-2.webp",
		rating: 5.6,
		price: 500,
		type: "T-Shirt"
	},
	{
		image: "https://i.ibb.co/hX8nh1T/T-shirt-3.webp",
		rating: 5.4,
		price: 250,
		type: "T-shirt"
	},
	{
		image: "https://i.ibb.co/nLwVd6m/T-shirt-4.webp",
		rating: 10,
		price: 250,
		type: "T-Shirt"
	},
	{
		image: "https://i.ibb.co/PrjxnVF/T-shirt-5.webp",
		rating: 6.1,
		price: 650,
		type: "T-shirt"
	},
	{
		image: "https://i.ibb.co/9VkSrJf/T-shirt-6.webp",
		rating: 4.1,
		price: 300,
		type: "T-Shirt"
	},
	{
		image: "https://i.ibb.co/JsV6B8j/asset-15.jpg",
		rating: 3.8,
		price: 1100,
		type: "Grown"
	},
	{
		image: "https://i.ibb.co/fGhwk4T/asset-4.jpg",
		rating: 4.8,
		price: 1400,
		type: "Grown"
	},
	{
		image: "https://i.ibb.co/njvGFMd/asset-14.jpg",
		rating: 2.5,
		price: 1500,
		type: "Grown"
	},
	{
		image: "https://i.ibb.co/8mSJks2/asset-45.jpg",
		rating: 4.2,
		price: 400,
		type: "Grown"
	},
	{
		image: "https://i.ibb.co/HDd2jS7/asset-13.jpg",
		rating: 4.3,
		price: 600,
		type: "Grown"
	},
	{
		image: "https://i.ibb.co/VxsSCqP/asset-44.jpg",
		rating: 4.7,
		price: 700,
		type: "Grown"
	},
	{
		image: "https://i.ibb.co/0mmSKj5/asset-37.jpg",
		rating: 2.8,
		price: 800,
		type: "Saree's"
	},
	{
		image: "https://i.ibb.co/4Zv4wPV/asset-14.jpg",
		rating: 5.2,
		price: 300,
		type: "Saree's"
	},
	{
		image: "https://i.ibb.co/q7Xv08Q/asset-41.jpg",
		rating: 1.8,
		price: 1100,
		type: "Saree's"
	},
	{
		image: "https://i.ibb.co/0YFH67j/asset-22.jpg",
		rating: 4.2,
		price: 2200,
		type: "Kurta"
	},
	{
		image: "https://i.ibb.co/R9QFwQy/asset-20.jpg",
		rating: 5.7,
		price: 2800,
		type: "Kurta"
	},
	{
		image: "https://i.ibb.co/jLd8z06/asset-25.jpg",
		rating: 7.4,
		price: 900,
		type: "Kurta"
	},
	{
		image: "https://i.ibb.co/Vgds3PH/asset-41.jpg",
		rating: 5.3,
		price: 1500,
		type: "Kurta"
	},
	{
		image: "https://i.ibb.co/YpznM9P/asset-13.jpg",
		rating: 2.2,
		price: 2100,
		type: "Kurta"
	},
	{
		image: "https://i.ibb.co/G7js6Gv/asset-43.jpg",
		rating: 5.5,
		price: 1700,
		type: "Kurta"
	},
	{
		image: "https://i.ibb.co/BzJ59QR/asset-31.jpg",
		rating: 2.4,
		price: 1300,
		type: "Kurta"
	},
	{
		image: "https://i.ibb.co/1JxnJhD/asset-13.jpg",
		rating: 4.9,
		price: 900,
		type: "Kurta"
	},
	{
		image: "https://i.ibb.co/yWZxhRy/img1.jpg",
		rating: 1.0,
		price: 350,
		type: "Top's"
	},
	{
		image: "https://i.ibb.co/fqhBGJJ/asset-14.jpg",
		rating: 5.6,
		price: 500,
		type: "Top's"
	},
	{
		image: "https://i.ibb.co/BtG2P5t/asset-13.jpg",
		rating: 5.4,
		price: 250,
		type: "Top's"
	},
	{
		image: "https://i.ibb.co/PQC0Kk1/asset-17.jpg",
		rating: 10,
		price: 250,
		type: "Top's"
	},
	{
		image: "https://i.ibb.co/kQhDjqv/asset-22.jpg",
		rating: 6.1,
		price: 650,
		type: "Top's"
	},
	{
		image: "https://i.ibb.co/GkbJNfN/asset-43.jpg",
		rating: 4.1,
		price: 300,
		type: "Top's"
	},
	{
		image: "https://i.ibb.co/JsV6B8j/asset-15.jpg",
		rating: 3.8,
		price: 1100,
		type: "Grown"
	},
	{
		image: "https://i.ibb.co/fGhwk4T/asset-4.jpg",
		rating: 4.8,
		price: 1400,
		type: "Grown"
	},
	{
		image: "https://i.ibb.co/njvGFMd/asset-14.jpg",
		rating: 2.5,
		price: 1500,
		type: "Grown"
	},
	{
		image: "https://i.ibb.co/8mSJks2/asset-45.jpg",
		rating: 4.2,
		price: 400,
		type: "Grown"
	},
	{
		image: "https://i.ibb.co/HDd2jS7/asset-13.jpg",
		rating: 4.3,
		price: 600,
		type: "Grown"
	},
	{
		image: "https://i.ibb.co/VxsSCqP/asset-44.jpg",
		rating: 4.7,
		price: 700,
		type: "Grown"
	},
	{
		image: "https://i.ibb.co/0mmSKj5/asset-37.jpg",
		rating: 2.8,
		price: 800,
		type: "Saree's"
	},
	{
		image: "https://i.ibb.co/4Zv4wPV/asset-14.jpg",
		rating: 5.2,
		price: 300,
		type: "Saree's"
	},
	{
		image: "https://i.ibb.co/q7Xv08Q/asset-41.jpg",
		rating: 1.8,
		price: 1100,
		type: "Saree's"
	},
	{
		image: "https://i.ibb.co/0YFH67j/asset-22.jpg",
		rating: 4.2,
		price: 2200,
		type: "Kurta"
	},
	{
		image: "https://i.ibb.co/R9QFwQy/asset-20.jpg",
		rating: 5.7,
		price: 2800,
		type: "Kurta"
	},
	{
		image: "https://i.ibb.co/jLd8z06/asset-25.jpg",
		rating: 7.4,
		price: 900,
		type: "Kurta"
	},
	{
		image: "https://i.ibb.co/Vgds3PH/asset-41.jpg",
		rating: 5.3,
		price: 1500,
		type: "Kurta"
	},
	{
		image: "https://i.ibb.co/YpznM9P/asset-13.jpg",
		rating: 2.2,
		price: 2100,
		type: "Kurta"
	},
	{
		image: "https://i.ibb.co/G7js6Gv/asset-43.jpg",
		rating: 5.5,
		price: 1700,
		type: "Kurta"
	},
	{
		image: "https://i.ibb.co/BzJ59QR/asset-31.jpg",
		rating: 2.4,
		price: 1300,
		type: "Kurta"
	},
	{
		image: "https://i.ibb.co/1JxnJhD/asset-13.jpg",
		rating: 4.9,
		price: 900,
		type: "Kurta"
	},
	{
		image: "https://i.ibb.co/yWZxhRy/img1.jpg",
		rating: 1.0,
		price: 350,
		type: "Top's"
	},
	{
		image: "https://i.ibb.co/fqhBGJJ/asset-14.jpg",
		rating: 5.6,
		price: 500,
		type: "Top's"
	},
	{
		image: "https://i.ibb.co/BtG2P5t/asset-13.jpg",
		rating: 5.4,
		price: 250,
		type: "Top's"
	},
	{
		image: "https://i.ibb.co/PQC0Kk1/asset-17.jpg",
		rating: 10,
		price: 250,
		type: "Top's"
	},
	{
		image: "https://i.ibb.co/kQhDjqv/asset-22.jpg",
		rating: 6.1,
		price: 650,
		type: "Top's"
	},
	{
		image: "https://i.ibb.co/GkbJNfN/asset-43.jpg",
		rating: 4.1,
		price: 300,
		type: "Top's"
	},

	{
		image: "https://ibb.co/FWdqdpH",
		rating:4.0,
		price: 199,
		type: "small size of T-Shirt"
	},
	{
		image: "https://ibb.co/RPK24sv",
		rating:4.0,
		price: 499,
		type: "T-shirt"
	},
	{
		image: "https://ibb.co/cwkFxXG",
		rating:2.5,
		price: 999,
		type: "Combo of four pack"
	},
	{
		image: "https://ibb.co/P5xk63h",
		rating:4.0,
		price: 499,
		type: "T-Shirt"
	},
	{
		image: "https://ibb.co/zPzX4sc",
		rating:5.0,
		price: 999,
		type: "Comboof3T-shirt"
	},
	{
		image: "https://ibb.co/56pXGWj",
		rating:3.5,
		price: 499,
		type: "Topforbabygirl"
	},
	{
		image: "https://ibb.co/drBNNW7",
		ratin:5.3,
		price: 99,
		type: "topforbabygirl"
	},
	{
		image: "https://ibb.co/bW1FSRN",
		rating:4.6,
		price: 999,
		type: "Whitetopforgirls"
	},
	{
		img: "https://ibb.co/XLPXF3F",
		rating:2.3,
		price: 999,
		type: "smallsizeofMulticolour top"
	},
	{
		image: "https://ibb.co/g6YzQ9D",
		rating:3.2,
		price: 2999,
		type: "smallsizeofT-shirt"
	},
	{
		image: "https://ibb.co/Fh5Vyzd",
		rating:6.7,
		price: 2499,
		type: "smallsizeoflehenga"
	},
	{
		image: "https://ibb.co/WWf3mKQ",
		rating:5.6,
		price: 2999,
		type: "smallsizeoflehenga"
	},
	{
		image: "https://ibb.co/VwZR2W1",
		rating:7.3,
		price: 499,
		type: "smallsizeofKurta"
	},
	{
		image: "https://i.ibb.co/YpznM9P/asset-13.jpg",
		rating: 2.2,
		price: 2100,
		type: "smallsizeofKurta"
	},
	{
		image: "https://ibb.co/2hSf2P2",
		rating:6.9,
		price: 2499,
		type: "smallsizeoflehenga"
	},
	{
		image: "https://ibb.co/2sdktTm",
		rating:3.7,
		price: 2999,
		type: "smallsizeofKurta"
	},
	{
		img: "https://ibb.co/K5TVzh4",
		price: 2499,
		type: "Lehenga"
	},
	{
		image: "https://ibb.co/vPSwx9J",
		rating:6.0,
		price: 2999,
		type: "smallsizeofkurta"
	},
	{
		image: "https://ibb.co/C9f1ntC",
		rating:4.9,
		price: 2999,
		type: "smallsizeoflehanga"
	},
	{
		image: "https://ibb.co/XZSG5JY",
		rating:6.7,
		price: 999,
		type: "smallsizeofjeanes"
	},
	{
		image: "https://ibb.co/3fdgryY",
		rating:3.5,
		price: 499,
		type: "smallsizeofjeanes"
	},
	{
		image: "https://ibb.co/ZVCkGdv",
		rating:2.9,
		price: 2999,
		type: "small size of jeanes"
	},
	{
		image: "https://ibb.co/kJvpHvx",
		rating:4.0,
		price: 299,
		type: "smallsizeofjeanes"
	}

]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
	const searchData = e.target.value.toLowerCase();

	if (searchData === 'shirt') {
		const shirtData = product.filter(item => item.type.toLowerCase() === 'shirt');
		displayItem(shirtData);
	} else if (searchData === 't-shirt') {
		const tshirtData = product.filter(item => item.type.toLowerCase() === 't-shirt');
		displayItem(tshirtData);
	} else if (searchData === 'jeanes') {
		const jeansData = product.filter(item => item.type.toLowerCase() === 'jeanes');
		displayItem(jeansData);
	} else if (searchData === 'lower') {
		const lowerData = product.filter(item => item.type.toLowerCase() === 'lower');
		displayItem(lowerData);
	} else if (searchData === "top's") {
		const topsData = product.filter(item => item.type.toLowerCase() === "top's");
		displayItem(topsData);
	} else if (searchData === "kurta") {
		const kurtaData = product.filter(item => item.type.toLowerCase() === "kurta");
		displayItem(kurtaData);
	} else if (searchData === "saree's") {
		const sareesData = product.filter(item => item.type.toLowerCase() === "saree's");
		displayItem(sareesData);
	} else if (searchData === "grown") {
		const grownData = product.filter(item => item.type.toLowerCase() === "grown");
		displayItem(grownData);
	} else if (searchData === "smallsizeofjeanes") {
		const smallkurtaData = product.filter(item => item.type.toLowerCase() === "smallsizeofjeanes");
		displayItem(smallkurtaData);
	} else if (searchData === "White top for girls") {
		const whiteData = product.filter(item => item.type.toLowerCase() === "Whitetopforgirls");
		displayItem(whiteData);
	} else if (searchData === "topforbabygirl") {
		const topData = product.filter(item => item.type.toLowerCase() === "topforbabygirl");
		displayItem(topData);
	} else if (searchData === "Comboof3T-shirt") {
		const comoData = product.filter(item => item.type.toLowerCase() === "Comboof3T-shirt");
		displayItem( comoData);
	} 
});

const displayItem = (items) => {
	document.getElementById('root').innerHTML = items.map((item) => {
		var { image, rating, price } = item;
		return (
			`<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>Rating: ${rating}</p>
                    <h2>$ ${price}.00</h2>
                    <button>Add to cart</button>
                </div>
            </div>`
		)
	}).join('')
};