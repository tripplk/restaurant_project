<template>
 <v-container>
        <v-card color="blue" >
            <v-card-title>
                <div class="text-h3">Our Menu</div>
            </v-card-title>
        </v-card>
    </v-container>
<v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
            <v-row>
                <v-col cols="12" md="4" v-for="item in menuItems" :key=item>
                    <v-card>
                        <v-card color="deep-purple-darken-4">
                            
                            <v-card-item>
                                <v-card-title>{{ item.name}}</v-card-title>

                                <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" :src="item.image" cover ></v-img>

                            <v-card-text>  
                             {{ item.price }}
                            </v-card-text>
                             <v-btn color="black" @click="addToOrder(item)"> Order</v-btn>

                        </v-card>
                    </v-card>
</v-col>
</v-row>
</v-container>
</v-card>
</v-container>

<v-container>
        <v-card color="black" >
            <v-card-title>
                <div class="text-h6">Current order: {{totalOrderAmount}}</div>
            </v-card-title>
        </v-card>
    </v-container>
    <v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4" v-for="item in orderItems" :key=item>
                        <v-card color="yellow">
                            <v-card-item>
                            <v-card-title>{{ item.name }}</v-card-title>

                            <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" :src="item.image" cover ></v-img>

                            <v-card-text>{{ item.price }}</v-card-text>
                        </v-card>
                        </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-container>
</template>

<script setup>
const menuItems = [
    {
        name: "fries",
        price: 200,
        description: "Best fries in town",
        size: "Large",
        offers: "None",
        image: "/mitchell-luo-ChXHveqrb28-unsplash.jpg"
    },
    {
        name: "cheese burger",
        price: 120,
        description: "most delicious cheese burger in town",
        size: "medium",
        offers: "None",
        image: "/allen-rad-9G_oJBKwi1c-unsplash.jpg"
    },
    {
        name: "Pizza",
        price: 550,
        description: "Best pizza in town",
        size: "small,medium and large",
        offers: "None",
        image: "ivan-torres-MQUqbmszGGM-unsplash.jpg"
    },
    {
        name: "chocolate brownies",
        price: 200,
        description: "sweetest chocolate brownies in town",
        size: "Large",
        offers: "None",
        image: "/kristiana-pinne-ySR_ukHu-2I-unsplash.jpg"
    },
    
    {
        name: "chicken sandwich",
        price: 50,
        description: "Best chicken sandwich in town",
        size: "None",
        offers: "None",
        image: "/jacinto-diego-Kr-9HgwpR-g-unsplash.jpg"
    },
    {
        name: "onion rings",
        price: 50,
        description: "Best onion rings in town",
        size: "None",
        offers: "None",
        image: "/esperanza-doronila-4FO9vox0T7M-unsplash.jpg"
    }
]
//manage the current state of the order
var orderItems = []
var totalOrderAmount = 0

function calculateTotalAmount(price){
    totalOrderAmount += price
}

function addToOrder(item){
    orderItems.push(item)
    calculateTotalAmount(item.price)
}
</script>