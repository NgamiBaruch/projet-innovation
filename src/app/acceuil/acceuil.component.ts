import { Component, HostListener, AfterViewInit } from '@angular/core';

interface Partner {
  logo: string;
  name: string;
  description: string;
}
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements AfterViewInit {
  public title = "Titre";
  public showBlocks = {
    R1A: false,
    R1B: false,
    R1C: false,
    R2C:false,
    R2A: false,
    R2B: false,
    R3A: false,
    R3B: false,
    R4B: false,
    R3C: false,
    R4C: false,
    P: false
  };
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkBlocksVisibility();
  }

  ngAfterViewInit() {
    this.checkBlocksVisibility(); 
    window.addEventListener('resize', () => this.checkBlocksVisibility()); 
  }

  private checkBlocksVisibility() {
    this.showBlocks.R1A = this.isVisible('.R1A');
    this.showBlocks.R1B = this.isVisible('.R1B');
    this.showBlocks.R1C = this.isVisible('.R1C');
    this.showBlocks.R2A = this.isVisible('.R2A');
    this.showBlocks.R2B = this.isVisible('.R2B');
    this.showBlocks.R3A = this.isVisible('.R3A');
    this.showBlocks.R3B = this.isVisible('.R3B');
    this.showBlocks.R4B = this.isVisible('.R4B');
    this.showBlocks.R2C = this.isVisible('.R2C');
    this.showBlocks.R3C = this.isVisible('.R3C');
    this.showBlocks.R4C = this.isVisible('.R4C');
    this.showBlocks.P = this.isVisible('.P');
  }

  private isVisible(selector: string): boolean {
    const element = document.querySelector(selector);
    return element ? element.getBoundingClientRect().top < window.innerHeight && element.getBoundingClientRect().bottom > 0 : false;
  }
  public partners: Partner[] = [

    {
      logo: 'FaculteA.png',
      name: 'Faculté des sciences',
      description: 'EIS-Innovation une équipe engagée.'
    },

    {
      logo: 'AfriqueA.png',
      name: 'ADI',
      description: 'EIS-Innovation une équipe engagée.'
    },

    {
      logo: 'challenge.png',
      name: 'Challenge Intelligence',
      description: 'EIS-Innovation une équipe engagée.'
    },

    {
      logo: 'MA64.jpg',
      name: 'MA64',
      description: 'EIS-Innovation une équipe engagée'
    },


  ];
  public blog: any[] = [

    {
      image:"expert.png",

      titre:"Expertise Technique",

      paragraphe:"EIS-Innovation a une equipe d\'experts passionnes en devèloppement web, programmation et conception, offrant des solutions de haute qualite grace a leur savoir-faire"
  
    },

    {
      image:"approch.png",

      titre:"Approche Personnalisee",


      paragraphe:"Nous comprenons que chaque client est unique, Nos solutions sont adaptees sont adaptees aux besoins specifiques de cahque projet offrant ainsi une approche personnalisee "
    
    },

    {
      image:"veille.png",

      titre:"Innovation et Veille Technologique",


      paragraphe:"EIS-Innovation reste a la pointe des dernieres technologies.Leur capacite a Innover et a l\'integrer les meilleures pratiques assure a leurs clients des solutions modernes et performantes"
    
    },

    {
      image:"coll.png",

      titre:"Collaboration Active",


      paragraphe:"Ils travaillent en partenariat avec leurs clients. La communication ouverte,les retours d experiences et la co-creation sont au coeur de leur approche "
    
    },
    {
      image:"design (2).png",

      titre:"Design Esthetique",


      paragraphe:"EIS-Innovation accorde une grand importance a l\'esthetique.Leurs interfaces sont épurées,intuitives et agreables a utiliser "
    
    
    },


    {
      image:"rocket.png",

      titre:"Reactivite et Flexibilite",


      paragraphe:"Ils sont reactifs aux besoins changeants et flexibles dans leur approche, Les delais sont respectès,et ils s\'adaptent aux imprevus. "
    
    
    },

    {
      image:"clipboard.png",
      titre:"Gestion de Projet Transparente",
      paragraphe: "Leur méthodologie de gestion de projet assure une planification rigoureuse et une exécution transparente.",
    }

  ];
}
