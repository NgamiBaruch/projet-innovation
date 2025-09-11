import { AfterViewInit, Component, HostListener } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-equipe',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.css'
})
export class EquipeComponent implements AfterViewInit {

    constructor(config: NgbCarouselConfig) {
      config.interval = 8000; 
      config.wrap = true;     
      config.keyboard = true; 
      config.pauseOnHover = true; 
    }
  
    public showBlocks = {
     T : false,
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
      this.showBlocks.T = this.isVisible('.T');
    }
  
    private isVisible(selector: string): boolean {
      const element = document.querySelector(selector);
      return element ? element.getBoundingClientRect().top < window.innerHeight && element.getBoundingClientRect().bottom > 0 : false;
    }  



  
  public donnees : any[] = [
    {
      srcImage : "bal.png",
      name : "LOUIS MBALLA MICHEL", 
      poste: "FONDATEUR EIS-INNOVATION",  
      message : "\" Chers visiteurs, chez EIS, nous croyons en l'innovation et l'excellence. Mon engagement est de diriger nos projets avec passion et de veiller à ce que  fournissions des solutions de qualité supérieure à nos clients. Merci de votre confiance\" ", 
      description:  "Mon rôle est de superviser l'ensemble des opérations de l'entreprise. Je  suis responsable de la définition et de la mise en œuvre de la stratégie globale, ainsi que de la gestion quotidienne des projets. Mon leadership et Ma vision assurent le succès et la croissance continue de EIS-innovation", 
      srcIconA: "", srcIconB:"",
      customClass: "style-fondateur" 
    
    },
      {
        srcImage : "mekee.png",
        name : "MEKE BERANGER", 
        poste: "LEAD, FULLSTACK ANGULAR/ SPRING BOOT",  
        message : "\"Hello, en tant que programmeur FULLSTACK et Créateur de solutions numériques innovantes, je transforme les défis technologiques en opportunités avec passion et expertise.\" ", 
        description:  "Mon rôle est de conçevoir et construire des applications web en intégrant le développement côté client (frontend) et côté serveur (backend) ainsi que de diriger les projets", 
        srcIconA: "", srcIconB:"",
        customClass: "style-lead" 

      },
    {
      srcImage : "Mi.png", 
      name : "DINOU MIGUEL", 
      poste: "UIX DESIGNER, FULL ANGULAR", 
      message: "\"Bonjour à tous, chez EIS, je crée des identités visuels profesionnelles et combine la créativité du design et la puissance de la technologie Angular pour créer des expériences utilisateur exceptionnelles. Mon objectif est de transformer vos idées en interfaces intuitives et performantes. Merci de nous faire confiance pour vos projets.\"", 
      description: "En tant que Développeur Angular et UI/UX Designer, je suis spécialisée dans le développement frontend, en utilisant le framework Angular et en intégrant les principes du design UI/UX. Je suis responsable de la conception, de la mise en œuvre et de la maintenance des interfaces utilisateur dynamiques, tout en veillant à leur performance, leur réactivité, et leur convivialité. Mon expertise en Angular et en design UI/UX permet de créer des expériences utilisateur intuitives et esthétiquement agréables, parfaitement adaptées aux exigences des projets de l'entreprise EIS.", 
      srcIconA: "", srcIconB: "",
      customClass: "style-miguel" 
    },
      {
        srcImage : "tony.png",
        name : "MBIADJEU ANTHONY",
        poste: "PROGRAMMEUR FRONT-END",
        message : "\"Bonjour à tous, chez EIS, je m'engage à créer des applications robustes et performantes en utilisant le cadre Spring Boot. Mon objectif est de développer des solutions backend fiables et évolutives pour répondre aux besoins de nos clients. Merci de votre confiance\"",
        description : "En tant que Développeur Spring Boot, je suis spécialisée dans le développement backend, en utilisant le framework Spring Boot. Je suis responsable de la conception, de la mise en œuvre et de la maintenance des applications serveur, garantissant leur performance et leur scalabilité. Mon expertise en Spring Boot permet de créer des solutions robustes et adaptées aux exigences des projets de l'entreprise EIS",
        srcIconA: "", srcIconB : "",
        customClass: "style-tony" 
      },

      {
        srcImage : "baruchx.png",
        name : "NGAMI BARUCH",
        poste: "LEAD, DEVELOPPEUR SPRING BOOT, ANGULAR",
        message : "\"Bonjour à tous, chez EIS, je m'engage à créer des applications robustes et performantes en utilisant le cadre Spring Boot. Mon objectif est de développer des solutions backend fiables et évolutives pour répondre aux besoins de nos clients. Merci de votre confiance\"",
        description : "En tant que Développeur Spring Boot, je suis spécialisée dans le développement backend, en utilisant le framework Spring Boot. Je suis responsable de la conception, de la mise en œuvre et de la maintenance des applications serveur, garantissant leur performance et leur scalabilité. Mon expertise en Spring Boot permet de créer des solutions robustes et adaptées aux exigences des projets de l'entreprise EIS",
        srcIconA: "", srcIconB : "",
        customClass: "style-bg" 
      }
  ];

  public blog: any[] = [

    {
      image: "Ballae.jpg",
      titre:'Louis Michel Mballa',
      nom:'Fondateur de EIS-INNOVATION',
      paragraphe:'Il gere la supervise des equipes, la gestion des projets,et l\'assurance de la satisfaction des clients',
      image1:'whatsapp.gif',
      image2:'linkedin.svg',
      savoir:'En savoir plus',
      color:'#006954' 

    },
    
    {
      image: "images/user.jpg",
      titre:'Hopogap Rene ',
      nom:'DEVELOPPER FULL WEB',
      paragraphe:'Il gere la supervise des equipes, la gestion des projets,et l\'assurance de la satisfaction des clients',
      image1:'linkedin.svg',
      image2:'whatsapp.gif',
      savoir:'En savoir plus',
      color:'#006954' 
      
    },
    {
      image:"meke.jpg",
      titre:'Beranger Meke',
      nom:'DEVELOPPER SPRING BOOT/ANGULAR',
     paragraphe:'Il gere la supervise des equipes, la gestion des projets,et l\'assurance de la satisfaction des clients',
      image1:'whatsapp.gif',
      image2:'linkedin.svg',
      savoir:'En savoir plus',
      color:'#006954' 

    },

    {
      image: "Miguel.jpg",
      titre:'Miguel Dinou',
      nom:'DEVELOPPER ANGULAR/UIX DESIGN',
      paragraphe:'Il gere la supervise des equipes, la gestion des projets,et l\'assurance de la satisfaction des clients',
      image1:'whatsapp.gif',
      image2:'linkedin.svg',
      savoir:'En savoir plus',
      color:'#006954' 

    }

    ,

    {
      image: "Anthonyx.jpg",
      titre:'Anthonix Nana',
      nom:'DEVELOPPER SPRING BOOT',
      paragraphe:'Il gere la supervise des equipes, la gestion des projets,et l\'assurance de la satisfaction des clients',
      image1:'linkedin.svg',
      image2:'whatsapp.gif',
      savoir:'En savoir plus',
      color:'#006954' 

    },

    {
      image:"baruch.jpg",
      titre:'BARUCH NGAMI',
      nom:'DEVELOPPER SPRING BOOT',
      paragraphe:'Il gere la supervise des equipes, la gestion des projets,et l\'assurance de la satisfaction des clients',
      image1:'whatsapp.gif',
      image2:'linkedin.svg',
      savoir:'En savoir plus',
      color:'#006954' 
    },

    {
      image:"images/user.jpg",
      titre:'MAXIME',
      nom:'DEVELOPPEUR LARAVEL, DJANGO, BLOCKCHAIN',
      paragraphe:'Il gere la supervise des equipes, la gestion des projets,et l\'assurance de la satisfaction des clients',
      image1:'whatsapp.gif',
      image2:'linkedin.svg',
      savoir:'En savoir plus',
      color:'#006954' 
    },

    {
      image:"images/user.jpg",
      titre:'IDRISS TOKO',
      nom:'DEVELOPPEUR FLUTTER, BLOCKCHAIN',
      paragraphe:'Il gere la supervise des equipes, la gestion des projets,et l\'assurance de la satisfaction des clients',
      image1:'whatsapp.gif',
      image2:'linkedin.svg',
      savoir:'En savoir plus',
      color:'#006954' 
    },

    {
      image:"images/user.jpg",
      titre:'SALOMON GHOST',
      nom:'UX DESIGNER',
      paragraphe:'Il gere la supervise des equipes, la gestion des projets,et l\'assurance de la satisfaction des clients',
      image1:'whatsapp.gif',
      image2:'linkedin.svg',
      savoir:'En savoir plus',
      color:'#006954' 
    },

    {
      image:"images/user.jpg",
      titre:'CABREL',
      nom:'DEVELOPPEUR JAVASCRIPT',
      paragraphe:'Il gere la supervise des equipes, la gestion des projets,et l\'assurance de la satisfaction des clients',
      image1:'whatsapp.gif',
      image2:'linkedin.svg',
      savoir:'En savoir plus',
      color:'#006954' 
    },

    {
      image:"images/user.jpg",
      titre:'DANIEL',
      nom:'REFERENCEUR WEB / SEO',
      paragraphe:'Il gere la supervise des equipes, la gestion des projets,et l\'assurance de la satisfaction des clients',
      image1:'whatsapp.gif',
      image2:'linkedin.svg',
      savoir:'En savoir plus',
      color:'#006954' 
    },

    {
      image:"images/user.jpg",
      titre:'GABRIEL',
      nom:'DEVELOPPEUR PYTHON DJANGO',
      paragraphe:'Il gere la supervise des equipes, la gestion des projets,et l\'assurance de la satisfaction des clients',
      image1:'whatsapp.gif',
      image2:'linkedin.svg',
      savoir:'En savoir plus',
      color:'#006954' 
    },

    {
      image:"images/user.jpg",
      titre:'RAPHAEL',
      nom:'DEVELOPPEUR',
      paragraphe:'Il gere la supervise des equipes, la gestion des projets,et l\'assurance de la satisfaction des clients',
      image1:'whatsapp.gif',
      image2:'linkedin.svg',
      savoir:'En savoir plus',
      color:'#006954' 
    },

  ];
}
