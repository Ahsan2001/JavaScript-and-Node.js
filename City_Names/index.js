function city_country( city, country="pakistan") {
    mycities = ` <br> "${city} , ${country} "`
    document.write(mycities)
}


city_country('Karachi')
city_country('dehli', 'India')
city_country('Lahore')