import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'Capital One',
      duration:'Aug 2019 to Dec 2020, Jan-2024 to Present',
      description: "Capital One is a banking client, I ‘m working as an angular developer on a Card-web application called EASE-WEB application. Working as an Angular developer with testing tools as well. During this period, migrated our ease-web application authorizations to entitlements using decisioning service.",
      summary: "Capital One is a banking client, I ‘m working as an angular developer on a Card-web application called EASE-WEB application. Working as an Angular developer with testing tools as well. During this period, migrated our ease-web application authorizations to entitlements using decisioning service.",
      tags: [Tag.HTML5, Tag.CSS3, Tag.TYPESCRIPT, Tag.ANGULAR, Tag.BOOTSTRAP, Tag.POSTGRESQL, Tag.DOCKER, Tag.DOCKERCOMPOSE, Tag.ANGULAR, Tag.JAVA, Tag.JPA, Tag.JDBC, Tag.JUNIT, Tag.MOCKITO, Tag.HIBERNATE, Tag.LOMBOK, Tag.SPRINGBOOT, Tag.SPRINGWEB],
      pictures: ["../../assets/oil_01.png", "../../assets/oil_02.png", "../../assets/oil_03.png", "../../assets/oil_04.png", "../../assets/oil_05.png"]
    },
    {
      id: 2,
      name: 'U.S. Bank',
      duration: 'Jan 2021 to Dec 2023',
      description: '',
      summary: 'U.S. Bancorp operates as a bank holding company. It offers financial services, including lending and depository services, cash management, and foreign exchanges. I’m here working as a software developer on one of the internal applications called Open Banking.',
      tags: [Tag.HTML5, Tag.CSS3, Tag.TYPESCRIPT, Tag.ANGULAR, Tag.BOOTSTRAP, Tag.SQLITE, Tag.CICD, Tag. GCP, Tag.DOCKER, Tag.DOCKERCOMPOSE, Tag.SQLITE, Tag.SWAGGER],
      pictures: ["../../assets/casino01.png", "../../assets/casino02.png"]
    },
    // {
    //   id: 3,
    //   name: 'Capital One',
    //   duration: '',
    //   description: '',
    //   summary: 'Capital One is a banking client, I ‘m working as an angular developer on a Card-web application called EASE-WEB application. Working as an Angular developer with testing tools as well. During this period, migrated our ease-web application authorizations to entitlements using decisioning service.',
    //   tags: [Tag.ANGULAR, Tag.BOOTSTRAP, Tag.CSS3, Tag.HTML5, Tag.CMS, Tag.CICD, Tag.JIRA, Tag.CUCUMBER, Tag.GHERKINS, Tag.JEST, Tag.DOCKERCOMPOSE],
    //   pictures: ["../../assets/pokedex_01.png", "../../assets/pokedex_02.png", "../../assets/pokedex_03.png", "../../assets/pokedex_04.png", "../../assets/pokedex_05.png", "../../assets/pokedex_06.png", "../../assets/pokedex_07.png"]
    // },
    {
      id: 3,
      name: 'Anthem Inc',
      duration: 'Jan 2019 to June',
      description: '',
      summary: 'Anthem Inc. is a leading health company dedicated to improving lives and communities, and making healthcare simpler. I was working as a UI developer Creating and enhancing the single page applications(SPA) using Angular and other UI frameworks/tools for one of the internal applications',
      tags: [Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP, Tag.ANGULAR],
      pictures: ["../../assets/teamtrack_06.png", "../../assets/teamtrack_07.png", "../../assets/teamtrack_08.png", "../../assets/teamtrack_09.png", "../../assets/teamtrack_10.png"]
    },
    {
      id: 4,
      name: 'i2 it solutions Inc.',
      duration: '',
      description: '',
      summary: 'i2 it solutions Inc. implements projects for various clients during this period I was working in different project and created single page(SPA) and responsive web applications using HTML5, CSS3, Angular 2/4, Java, SPA, JDBC, SQL/MySQL and etc.',
      tags: [Tag.ANGULAR, Tag.JAVASCRIPT, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP, Tag.JAVA, Tag.SQL, Tag.MySQL, Tag.ORACLE],
      pictures: ["../../assets/portfolio_01.png", "../../assets/portfolio_02.png", "../../assets/portfolio_03.png", "../../assets/portfolio_04.png", "../../assets/portfolio_05.png"]
    }
  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('BC | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
