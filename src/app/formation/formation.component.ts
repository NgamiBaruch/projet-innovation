import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent {
  formations: any[] = [
    {
      icon: 'linux.png',
      name: 'Sécurité Linux',
      description: 'Cette formation vous fournira les compétences nécessaires pour protéger vos systèmes Linux contre les menaces et les vulnérabilités. Vous apprendrez à sécuriser les données et les applications, tout en renforçant la défense contre les attaques potentielles. Avec ce parcours, vous serez en mesure d\'assurer une protection robuste de vos environnements Linux.'
    },
    {
      icon: 'RedHat.png',
      name: 'Architecture Red Hat',
      description: 'Ce parcours est conçu pour ceux qui aspirent à devenir des architectes Red Hat. Il vous offre une formation complète sur la conception et la gestion d\'architectures complexes basées sur Red Hat. À l\'issue de ce parcours, vous aurez les compétences nécessaires pour planifier, déployer, et superviser des solutions Red Hat à grande échelle, tout en assurant leur stabilité et leur performance.'
    },
    {
      icon: 'devops.png',
      name: 'DevOps',
      description: 'Cette formation vous dotera des compétences pratiques essentielles pour automatiser les déploiements sur plusieurs plateformes de manière plus fréquente et sécurisée. Vous serez capable d\'assurer des déploiements de haute qualité tout en optimisant les processus DevOps au sein de vos environnements cloud.'

    },
    {
      icon: 'sécurité.png',
      name: 'Conteneurs',
      description: 'Avec cette formation, vous acquerrez les compétences pratiques nécessaires pour construire, sécuriser et gérer des conteneurs sur plusieurs plateformes. Vous maîtriserez les outils et les techniques pour assurer une gestion efficace et sécurisée des conteneurs dans divers environnements.'
    },
    {
      icon: 'azure.svg',
      name: 'Sécurité Azure',
      description: 'Ce parcours vous prépare à sécuriser les données et les applications sur Azure. Vous apprendrez à protéger vos systèmes cloud contre les attaques et les intrusions, tout en renforçant la sécurité de vos environnements Azure.'
    },
    {
      icon: 'architecture.svg',
      name: 'Architecture Azure',
      description: 'Cette formation est conçu pour ceux qui souhaitent devenir des architectes Azure. Il vous offrira les connaissances et compétences pratiques indispensables pour concevoir et superviser des solutions cloud robustes et évolutives sur Azure'
    },
    {
      icon: 'developpement.png',
      name: 'Développement Azure',
      description: 'Cette formation vous fournira les compétences pratiques essentielles pour construire, tester, déployer et gérer des applications sur Azure. Vous maîtriserez les bases nécessaires pour assurer le cycle de vie complet des applications dans l\'environnement Azure.'
    },
    {
      icon: 'donnees.png',
      name: 'Données Azure',
      description: 'râce à cette formation, vous acquerrez les compétences clés pour ingérer, stocker et analyser des données sur Azure. Vous serez capable de gérer efficacement les flux de données dans des environnements cloud en toute sécurité et performance.'
    },
    {
      icon: 'aws.png',
      name: 'Sécurité AWS',
      description: 'Gardez-le secret, gardez-le en sécurité. Maîtrisez les arts sombres de la sécurité cloud. Après cette formation, vous aurez les compétences nécessaires pour protéger les données et les infrastructures cloud contre les menaces et les vulnérabilités.'
    },
    {
      icon: 'ai.png',
      name: 'Apprentissage Automatique AWS',
      description: 'Après cette formation, vous serez capable de créer, entraîner et déployer des modèles de machine learning efficaces sur la plateforme AWS.'
    },
    {
      icon: 'developer.png',
      name: 'DevOps AWS',
      description: 'Grâce à cette formation, vous acquerrez les compétences nécessaires pour automatiser les processus de développement et de déploiement, améliorer la collaboration entre les équipes et optimiser les performances des applications sur AWS.'
    },
    {
      icon: 'coding (1).png',
      name: 'Développeur AWS',
      description: 'Après cette formation, vous aurez les compétences nécessaires pour développer, tester et déployer des applications sur la plateforme AWS.'
    },
    {
      icon: 'aws.png',
      name: 'Architecte AWS',
      description: 'Après cette formation, vous aurez les compétences nécessaires pour concevoir et architecturer des solutions robustes et évolutives sur AWS.'
    },
    {
      icon: 'devops.png',
      name: 'Mise en œuvre de DevSecOps (LFS262)',
      description: 'Après cette formation, vous aurez les compétences nécessaires pour intégrer les pratiques de sécurité dans le cycle de vie du développement logiciel, assurant ainsi la sécurité dès le début du processus de développement.'
    },
    {
      icon: 'securit.png',
      name: 'Essentiels de la Cybersécurité (LFC108)',
      description: 'Cette formation vous permettre de comprendre les principes fondamentaux de la cybersécurité, y compris la protection des systèmes et des réseaux contre les cybermenaces. Vous apprendrez à identifier les vulnérabilités et à mettre en œuvre des mesures de sécurité efficaces.'
    },
    {
      icon: 'cloudd.png',
      name: 'Essentiels de Kubernetes et Cloud Native (LFS250)',
      description: '. Vous apprendrez à gérer l\'architecture de Kubernetes, à relever les défis de l\'orchestration des conteneurs et à déployer et surveiller vos applications dans des environnements distribués'
    },
    {
      icon: 'code.png',
      name: 'DevSecOps avec GitLab',
      description: 'Sécurisez vos pipelines CI/CD avec GitLab. Après cette formation, vous aurez les compétences nécessaires pour intégrer des pratiques de sécurité dans vos processus de développement et de déploiement en utilisant GitLab.'
    },
    {
      icon: 'clou.png',
      name: ' Le cloud d\'Azure',
      description: 'Maîtrisez les fondamentaux par la pratique. Après cette formation, vous aurez les compétences nécessaires pour comprendre et utiliser les services cloud d\'Azure, incluant la gestion des ressources, le déploiement des applications et la sécurité.'
    },
    {
      icon: 'azure.svg',
      name: 'Terraform avec Azure',
      description: 'Après cette formation, vous aurez les compétences nécessaires pour utiliser Terraform pour automatiser le déploiement et la gestion des infrastructures sur Azure. Vous apprendrez à écrire des configurations Terraform, à gérer l\'état de l\'infrastructure et à intégrer Terraform avec d\'autres outils DevOps.'
    },
    {
      icon: 'python.png',
      name: 'Développeur Python',
      description: ' Formation Complète 2024. Après cette formation, vous aurez les compétences nécessaires pour développer des applications en Python, incluant la programmation orientée objet, la gestion des bases de données, et le développement web avec des frameworks comme Django et Flask.'
    },
    {
      icon: 'python8.svg',
      name: 'Fondamentaux de la Science des Données avec Python',
      description: 'Commencez avec la programmation Python. Après cette formation, vous aurez les compétences de base en Python'
    },
    {
      icon: 'jenkins-96.png',
      name: 'Jenkins, de Zéro à Héros',
      description: ' Devenez un maître DevOps avec Jenkins. Après cette formation, vous aurez les compétences nécessaires pour configurer et utiliser Jenkins pour automatiser les processus de développement et de déploiement, améliorer l\'intégration continue et la livraison continue (CI/CD).'
    },
    {
      icon: 'icons8-devops-60.png',
      name: ' Fondamentaux de DevOps',
      description: 'Après cette formation, vous aurez les compétences nécessaires pour comprendre les principes de base de DevOps, incluant la collaboration entre les équipes de développement et d\'exploitation, l\'automatisation des processus et l\'amélioration continue des systèmes.'
    },
    {
      icon: 'trolling.png',
      name: 'Bootcamp de Scripting Bash',
      description: 'Après cette formation basée sur 10 projets, vous aurez les compétences nécessaires pour écrire des scripts Bash efficaces pour automatiser les tâches sur les systèmes Unix/Linux, incluant la gestion des fichiers, l\'administration système et la programmation de scripts complexes.'
    },
    {
      icon: 'linux.png',
      name: 'Les Bases de la Ligne de Commande Linux',
      description: 'Description: Après cette formation, vous aurez les compétences nécessaires pour utiliser efficacement la ligne de commande Linux, incluant la navigation dans le système de fichiers, la gestion des fichiers et des processus, et l\'exécution des commandes de base.'
    },
    {
      icon: 'linux (1).png',
      name: ' LPI Linux Essentials 010-160',
      description: 'Après cette formation, vous serez prêt à passer l\'examen de certification LPI Linux Essentials, en maîtrisant les concepts fondamentaux de Linux, la gestion des utilisateurs et des groupes, ainsi que les permissions et la sécurité.'
    },
    {
      icon: 'devops.png',
      name: ' Tests Pratiques DevOps',
      description: 'Après cette formation, vous aurez les compétences nécessaires pour utiliser ChatGPT dans le cadre des pratiques DevOps, incluant l\'automatisation des tâches, la gestion des configurations et l\'amélioration des processus de développement et de déploiement.'
    },
    {
      icon: 'aws.png',
      name: 'AWS Certified Solutions Architect Associate [2024]',
      description: 'Après cette formation, vous serez prêt à passer l\'examen de certification AWS Certified Solutions Architect Associate, en maîtrisant les concepts de base de l\'architecture AWS, la conception de solutions évolutives et sécurisées, et la gestion des ressources AWS.'
    },
    {
      icon: 'dev.png',
      name: 'Expert Ansible - CICD avancé pour DevOps [2024]',
      description: 'Après cette formation, vous aurez les compétences nécessaires pour maîtriser Ansible dans le cadre des pratiques CI/CD avancées pour DevOps. Vous apprendrez à automatiser les déploiements, à gérer les configurations et à intégrer Ansible avec d\'autres outils DevOps.'
    },
    {
      icon: '00028-icon-service-Batch-AI-256x256.png',
      name: 'Apache Hive pour les Ingénieurs de Données (Pratique)',
      description: 'Après cette formation, vous aurez les compétences nécessaires pour utiliser Apache Hive pour la gestion et l\'analyse des données. Vous apprendrez à créer des requêtes, à gérer des bases de données et à optimiser les performances des requêtes dans des environnements de big data.'
    },
    {
      icon: 'python.png',
      name: 'Introduction au Machine Learning pour les Développeurs Python',
      description: 'Après cette formation, vous aurez les compétences nécessaires pour comprendre les concepts de base du machine learning et les appliquer en utilisant Python. Vous apprendrez à créer, entraîner et évaluer des modèles de machine learning.'
    },
    {
      icon: 'js+python.jpeg',
      name: ' Cours Complet de CSS, JavaScript et Python',
      description: 'Après cette formation, vous aurez les compétences nécessaires pour développer des applications web en utilisant CSS, JavaScript et Python. Vous apprendrez à créer des interfaces utilisateur interactives, à manipuler le DOM et à intégrer des fonctionnalités backend avec Python.'
    },
    {
      icon: 'php-code.png',
      name: 'Cours Complet de Java et PHP',
      description: 'Après cette formation, vous aurez les compétences nécessaires pour développer des applications en Java et PHP. Vous apprendrez à créer des applications web dynamiques, à gérer les bases de données et à intégrer les deux langages pour des solutions complètes.'
    },
    {
      icon: 'django.png',
      name: 'Python et Framework Django avec Modèles HTML 5',
      description: ' Vous apprendrez à créer des interfaces utilisateur modernes avec HTML 5 et à intégrer ces interfaces avec des backends robustes en Python.'
    },
    {
      icon: 'certificate (1).png',
      name: 'Certification Professionnelle de Product Owner',
      description: 'Après cette formation, vous aurez les compétences nécessaires pour assumer le rôle de Product Owner dans une équipe Agile. Vous apprendrez à gérer le backlog produit, à prioriser les fonctionnalités et à collaborer efficacement avec les équipes de développement pour livrer des produits de haute qualité.'
    },
    {
      icon: 'react.png',
      name: 'AWS et React : Déployer une Application E-commerce à Échelle Automatique',
      description: 'vous aurez les compétences nécessaires pour développer et déployer des applications e-commerce évolutives en utilisant AWS et React. Vous apprendrez à configurer des environnements AWS pour l\'auto-scaling et à créer des interfaces utilisateur interactives avec React.'
    },
  ];
}
