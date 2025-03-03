import { Injectable } from '@angular/core';

export class Trip {
  constructor(
    public id: number,
    public dest: string,
    public desc: string,
    public price: number
  ) {}
}

@Injectable({
  providedIn: 'root',
})


export class TripService {
  private trips: Trip[] = [
    new Trip(1, 'Bali, Indonésie', 'Découvrez une destination inoubliable où aventure et détente se mêlent harmonieusement.', 799),
    new Trip(2, 'Kyoto, Japon', "Laissez-vous séduire par les paysages à couper le souffle et l'hospitalité locale.", 899),
    new Trip(3, 'Santorin, Grèce', 'Une expérience unique entre culture ancestrale et modernité vibrante.', 999),
    new Trip(4, 'Reykjavik, Islande', 'Plongez dans une ambiance magique et laissez-vous surprendre par chaque recoin de cette ville fascinante.', 1099),
    new Trip(5, 'Marrakech, Maroc', 'Entre traditions et innovations, cette destination vous réserve bien des surprises.', 1199),
    new Trip(6, 'Venise, Italie', 'Savourez la cuisine locale, explorez les lieux emblématiques et créez des souvenirs mémorables.', 1299),
    new Trip(7, 'Rio de Janeiro, Brésil', "Un havre de paix où la nature et l'architecture forment une harmonie parfaite.", 1399),
    new Trip(8, 'Phuket, Thaïlande', 'Vivez une immersion totale dans une ville aux mille contrastes et aux paysages enchanteurs.', 1499),
    new Trip(9, 'New York, États-Unis', "Profitez de plages paradisiaques, d'activités inoubliables et d'une culture envoûtante.", 1599),
    new Trip(10, 'Le Cap, Afrique du Sud', 'Admirez les merveilles naturelles et architecturales qui font la renommée de cette destination.', 1699),
    new Trip(11, 'Sydney, Australie', "Laissez-vous porter par l'énergie de la ville et partez à la rencontre des habitants chaleureux.", 1799),
    new Trip(12, 'Hanoï, Vietnam', "Un lieu idéal pour les amateurs d'aventure et de découverte, entre montagnes et océans.", 1899),
    new Trip(13, 'Toronto, Canada', 'Baladez-vous à travers les ruelles animées et découvrez des trésors cachés à chaque coin de rue.', 1999),
    new Trip(14, 'Bangkok, Thaïlande', 'Un mélange parfait entre traditions séculaires et modernité effervescente.', 2099),
    new Trip(15, 'Dubaï, Émirats Arabes Unis', "Destination idéale pour les amoureux de la nature et les passionnés d'histoire.", 2199),
    new Trip(16, 'Londres, Royaume-Uni', 'Découvrez une ville au charme intemporel et aux panoramas spectaculaires.', 2299),
    new Trip(17, 'Buenos Aires, Argentine', 'Laissez-vous charmer par la diversité culturelle et la richesse historique de cette ville.', 2399),
    new Trip(18, 'Copenhague, Danemark', 'Savourez des instants magiques dans une atmosphère unique et inspirante.', 2499),
    new Trip(19, 'Amsterdam, Pays-Bas', 'Explorez un univers fascinant où chaque instant est une nouvelle découverte.', 2599),
    new Trip(20, 'Lisbonne, Portugal', 'Un voyage qui promet émerveillement, détente et découvertes inoubliables.', 299),
    new Trip(21, 'Copenhague, Danemark', 'Savourez des instants magiques dans une atmosphère unique et inspirante.', 299),
    new Trip(22, 'Amsterdam, Pays-Bas', 'Explorez un univers fascinant où chaque instant est une nouvelle découverte.', 229),
    new Trip(23, 'Lisbonne, Portugal', 'Un voyage qui promet émerveillement, détente et découvertes inoubliables.', 265),
  ];
  constructor() {}
  card_page : number = 20;
  getTrips(page: number): Trip[] {
    const startIndex = this.card_page * (page - 1); 
    const endIndex = startIndex + this.card_page; 
    return this.trips.slice(startIndex, endIndex);
  }

  getTripById(id: number): Trip | undefined {
    return this.trips.find((trip) => trip.id === id);
  }

  addTrip(trip: Trip): void {
    this.trips.push(trip);
  }

  removeTrip(id: number): void {
    this.trips = this.trips.filter((trip) => trip.id !== id);
  }


  nbPageMax(): number {
    return Math.ceil(this.trips.length / this.card_page);
  }


  index() : number 
  {
    return Math.floor(Math.random() * this.trips.length-3);
  }

  makeRdmTrip(): Trip {
    const dest : string = this.trips[this.index()].dest;
    const desc : string = this.trips[this.index()].desc;
    const price: number = this.trips[this.index()].price;
    const id : number = Math.floor(Math.random() * (1000000)) + 1;

    return new Trip(id,dest,desc,price);

  }
}
