import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

class DogItemShow extends Component {

  checkBreed = (id) => {
      switch (id) {
        case '201':
          return 'Dingo';
        case '200':
          return 'Yorkshire Terrier';
        case '199':
          return 'Yorkipoo';
        case '198':
          return 'Xoloitzcuintli';
        case '197':
          return 'Wirehaired Pointing Griffon';
        case '196':
          return 'Whippet';
        case '195':
          return 'West Highland White Terrier';
        case '194':
          return 'Welsh Terrier';
        case '193':
          return 'Welsh Springer Spaniel';
        case '192':
          return 'Weimaraner';
        case '191':
          return 'Vizsla';
        case '190':
          return 'Treeing Walker Coonhound';
        case '189':
          return 'Treeing Tennessee Brindle';
        case '188':
          return 'Toy Fox Terrier';
        case '187':
          return 'Tibetan Terrier';
        case '186':
          return 'Tibetan Spaniel';
        case '185':
          return 'Tibetan Mastiff';
        case '184':
          return 'Swedish Vallhund';
        case '183':
          return 'Sussex Spaniel';
        case '182':
          return 'Standard Schnauzer';
        case '181':
          return 'Staffordshire Bull Terrier';
        case '180':
          return 'Stabyhoun';
        case '179':
          return 'Soft Coated Wheaten Terrier';
        case '178':
          return 'Small Munsterlander Pointer';
        case '177':
          return 'Sloughi';
        case '176':
          return 'Skye Terrier';
        case '175':
          return 'Silky Terrier';
        case '174':
          return 'Siberian Husky';
        case '173':
          return 'Shih Tzu';
        case '172':
          return 'Shiba Inu';
        case '171':
          return 'Shetland Sheepdog';
        case '170':
          return 'Sealyham Terrier';
        case '169':
          return 'Scottish Terrier';
        case '168':
          return 'Scottish Deerhound';
        case '167':
          return 'Schnoodle';
        case '166':
          return 'Schipperke';
        case '165':
          return 'Samoyed';
        case '164':
          return 'Saluki';
        case '163':
          return 'Saint Bernard';
        case '162':
          return 'Rottweiler';
        case '161':
          return 'Rhodesian Ridgeback';
        case '160':
          return 'Redbone Coonhound';
        case '159':
          return 'Rat Terrier';
        case '158':
          return 'Pyrenean Shepherd';
        case '157':
          return 'Puli';
        case '156':
          return 'Puggle';
        case '155':
          return 'Pug';
        case '154':
          return 'Portuguese Water Dog';
        case '153':
          return 'Poodle';
        case '152':
          return 'Pomeranian';
        case '151':
          return 'Polish Lowland Sheepdog';
        case '150':
          return 'Pointer';
        case '149':
          return 'Pocket Beagle';
        case '148':
          return 'Plott';
        case '147':
          return 'Pharaoh Hound';
        case '146':
          return 'Petit Basset Griffon Vendeen';
        case '145':
          return 'Pembroke Welsh Corgi';
        case '144':
          return 'Pekingese';
        case '143':
          return 'Peekapoo';
        case '142':
          return 'Papillon';
        case '141':
          return 'Otterhound';
        case '140':
          return 'Old English Sheepdog';
        case '139':
          return 'Nova Scotia Duck Tolling Retriever';
        case '138':
          return 'Norwich Terrier';
        case '137':
          return 'Norwegian Lundehund';
        case '136':
          return 'Norwegian Elkhound';
        case '135':
          return 'Norwegian Buhund';
        case '134':
          return 'Norfolk Terrier';
        case '133':
          return 'Newfoundland';
        case '132':
          return 'Neapolitan Mastiff';
        case '131':
          return 'Mutt';
        case '130':
          return 'Miniature Schnauzer';
        case '129':
          return 'Miniature Pinscher';
        case '128':
          return 'Mastiff';
        case '127':
          return 'Manchester Terrier';
        case '126':
          return 'Maltipoo';
        case '125':
          return 'Maltese Shih Tzu';
        case '124':
          return 'Maltese';
        case '123':
          return 'Lowchen';
        case '122':
          return 'Lhasa Apso';
        case '121':
          return 'Leonberger';
        case '120':
          return 'Lancashire Heeler';
        case '119':
          return 'Lakeland Terrier';
        case '118':
          return 'Labrador Retriever';
        case '117':
          return 'Labradoodle';
        case '116':
          return 'Kuvasz';
        case '115':
          return 'Kooikerhondje';
        case '114':
          return 'Komondor';
        case '113':
          return 'Kerry Blue Terrier';
        case '112':
          return 'Keeshond';
        case '111':
          return 'Korean Jindo Dog';
        case '110':
          return 'Japanese Chin';
        case '109':
          return 'Jack Russell Terrier';
        case '108':
          return 'Italian Greyhound';
        case '107':
          return 'Irish Wolfhound';
        case '106':
          return 'Irish Water Spaniel';
        case '105':
          return 'Irish Terrier';
        case '104':
          return 'Irish Setter';
        case '103':
          return 'Irish Red and White Setter';
        case '102':
          return 'Icelandic Sheepdog';
        case '101':
          return 'Ibizan Hound';
        case '100':
          return 'Havanese';
        case '99':
          return 'Harrier';
        case '98':
          return 'Greyhound';
        case '97':
          return 'Greater Swiss Mountain Dog';
        case '96':
          return 'Great Pyrenees';
        case '95':
          return 'Great Dane';
        case '94':
          return 'Gordon Setter';
        case '93':
          return 'Goldendoodle';
        case '92':
          return 'Golden Retriever';
        case '91':
          return 'Goldador';
        case '90':
          return 'Glen of Imaal Terrier';
        case '89':
          return 'Giant Schnauzer';
        case '88':
          return 'German Wirehaired Pointer';
        case '87':
          return 'German Shorthaired Pointer';
        case '86':
          return 'German Shepherd Dog';
        case '85':
          return 'German Pinscher';
        case '84':
          return 'French Bulldog';
        case '83':
          return 'Fox Terrier';
        case '82':
          return 'Flat-Coated Retriever';
        case '81':
          return 'Finnish Spitz';
        case '80':
          return 'Finnish Lapphund';
        case '79':
          return 'Field Spaniel';
        case '78':
          return 'Entlebucher Mountain Dog';
        case '77':
          return 'English Toy Spaniel';
        case '76':
          return 'English Springer Spaniel';
        case '75':
          return 'English Setter';
        case '74':
          return 'English Foxhound';
        case '73':
          return 'English Cocker Spaniel';
        case '72':
          return 'Dogue de Bordeaux';
        case '71':
          return 'Doberman Pinscher';
        case '70':
          return 'Dandie Dinmont Terrier';
        case '69':
          return 'Dalmatian';
        case '68':
          return 'Dachshund';
        case '67':
          return 'Curly-Coated Retriever';
        case '66':
          return 'Coton de Tulear';
        case '65':
          return 'Collie';
        case '64':
          return 'Cocker Spaniel';
        case '63':
          return 'Cockapoo';
        case '62':
          return 'Clumber Spaniel';
        case '61':
          return 'Chow Chow';
        case '60':
          return 'Chinook';
        case '59':
          return 'Chinese Shar-Pei';
        case '58':
          return 'Chinese Crested';
        case '57':
          return 'Chihuahua';
        case '56':
          return 'Chesapeake Bay Retriever';
        case '55':
          return 'Cesky Terrier';
        case '54':
          return 'Cavalier King Charles Spaniel';
        case '53':
          return 'Catahoula Leopard Dog';
        case '52':
          return 'Cardigan Welsh Corgi';
        case '51':
          return 'Cane Corso';
        case '50':
          return 'Canaan Dog';
        case '49':
          return 'Cairn Terrier';
        case '48':
          return 'Bullmastiff';
        case '47':
          return 'Bulldog';
        case '46':
          return 'Bull Terrier';
        case '45':
          return 'Brussels Griffon';
        case '44':
          return 'Brittany';
        case '43':
          return 'Briard';
        case '42':
          return 'Bracco Italiano';
        case '41':
          return 'Boykin Spaniel';
        case '40':
          return 'Boxer';
        case '39':
          return 'Bouvier des Flandres';
        case '38':
          return 'Boston Terrier';
        case '37':
          return 'Borzoi';
        case '36':
          return 'Border Terrier';
        case '35':
          return 'Border Collie';
        case '34':
          return 'Bolognese';
        case '33':
          return 'Bluetick Coonhound';
        case '32':
          return 'Bloodhound';
        case '31':
          return 'Black Russian Terrier';
        case '30':
          return 'Black and Tan Coonhound';
        case '29':
          return 'Bichon Frise';
        case '28':
          return 'Bernese Mountain Dog';
        case '27':
          return 'Berger Picard';
        case '26':
          return 'Belgian Tervuren';
        case '25':
          return 'Belgian Sheepdog';
        case '24':
          return 'Belgian Malinois';
        case '23':
          return 'Bedlington Terrier';
        case '22':
          return 'Bearded Collie';
        case '21':
          return 'Beagle';
        case '20':
          return 'Basset Hound';
        case '19':
          return 'Basenji';
        case '18':
          return 'Barbet';
        case '17':
          return 'Azawakh';
        case '16':
          return 'Australian Terrier';
        case '15':
          return 'Australian Shepherd';
        case '14':
          return 'Australian Cattle Dog';
        case '13':
          return 'Appenzeller Sennenhunde';
        case '12':
          return 'Anatolian Shepherd Dog';
        case '11':
          return 'American Water Spaniel';
        case '10':
          return 'American Pit Bull Terrier';
        case '9':
          return 'American Foxhound';
        case '8':
          return 'American Eskimo Dog';
        case '7':
          return 'American English Coonhound';
        case '6':
          return 'Alaskan Malamute';
        case '5':
          return 'Akita';
        case '4':
          return 'Airedale Terrier';
        case '3':
          return 'Afghan Hound';
        case '2':
          return 'Affenpinscher';
        case '1':
          return 'Not specified';
        default:
          return 'Not specified';
    }
  }

  render() {
    const { key, uri, name, breed, elem } = this.props;
    return (

      <View>
        <View style={styles.viewStyle} key={key}>
          <Image source={{uri: uri }} style={styles.imageStyle}/>
          <View style={styles.textContainerStyle}>
            <Text style={styles.nameStyle}>{name.toUpperCase()}</Text>
            <Text style={styles.breedStyle}>{this.checkBreed(breed)}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = {
  imageStyle: {
    flex: 1,
    borderRadius: 10,
    height: 300,
    width: null,
    backgroundColor: 'white'
  },
  viewStyle: {
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderRadius:  10,
    flexDirection: 'column'
  },
  nameStyle: {
    flex: 1,
    fontSize: 20,
    fontWeight: '700',
    color: '#333'
  },
  breedStyle: {
    flex: 1,
    fontSize: 20,
    fontWeight: '300',
    paddingTop: 5,
    paddingBottom: 5
  },
  textContainerStyle: {
    position: 'absolute',
    bottom: -5,
    right: 0,
    left: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'white',
    padding: 15
  }
};

export default DogItemShow ;

