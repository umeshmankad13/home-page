document.addEventListener('DOMContentLoaded', function() {
    
    const products = [
        { 
            name: 'Sofa', 
            description: 'Comfortable sofa for living room.', 
            price: '$500',
            mainImageUrl: 'https://via.placeholder.com/250?text=Sofa',
            additionalImagesUrl: [
                'https://via.placeholder.com/250?text=Sofa+Side',
                'https://via.placeholder.com/250?text=Sofa+Back'
            ]
        },
        { 
            name: 'Dining Table', 
            description: 'Elegant dining table for family gatherings.', 
            price: '$700',
            mainImageUrl:'https://via.placeholder.com/250?text=Dining+Table',
            additionalImagesUrl:[
                'https://via.placeholder.com/250?text=Dining+Table+View1',
                'https://via.placeholder.com/250?text=Dining+Table+View2'
            ]
        },
        { 
            name:'Bed', 
            description:'Queen size bed with storage.', 
            price:'$800',
            mainImageUrl:'https://via.placeholder.com/250?text=Bed',
            additionalImagesUrl:[
                'https://via.placeholder.com/250?text=Bed+Side',
                'https://via.placeholder.com/250?text=Bed+Storage'
            ]
        },
        { 
            name:'Chair', 
            description:'Stylish chair for any room.', 
            price:'$150',
            mainImageUrl:'https://via.placeholder.com/250?text=Chair',
            additionalImagesUrl:[
                'https://via.placeholder.com/250?text=Chair+Front',
                'https://via.placeholder.com/250?text=Chair+Side'
            ]
        }
    ];
 
    const productGallery = document.getElementById('productGallery');
     
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.mainImageUrl}" alt="${product.name}">
            <div class="additional-images">
                ${product.additionalImagesUrl.map(url => `<img src="${url}" alt="${product.name} Additional Image">`).join('')}
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>${product.price}</strong></p>`;
        productGallery.appendChild(productItem);
    });
 
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        document.getElementById('formResponse').innerText = `Thank you for contacting us, ${name}!`;
        this.reset();
    });
 });
 
 

