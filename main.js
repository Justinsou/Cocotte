document.addEventListener('DOMContentLoaded', function() {
  const elImg1 = document.querySelector('[data-js-img1]'),
        elImg2 = document.querySelector('[data-js-img2]'),
        elImg3 = document.querySelector('[data-js-img3]'),
        elImg4 = document.querySelector('[data-js-img4]'),
        elImg5 = document.querySelector('[data-js-img5]'),
        elImg6 = document.querySelector('[data-js-img6]'),
        elChoixCouleur = document.querySelector('[data-js-couleur]');

  elChoixCouleur.addEventListener('click', (e) => {
    let elClic = e.target,
        img;

    if (elClic.hasAttribute('data-js-action')) {
      img = elClic.dataset.jsAction;
      elImg1.src = `img/${img}`;
    }

    if (elClic.hasAttribute('data-js-action2')) {
      img = elClic.dataset.jsAction2;
      elImg2.src = `img/${img}`;
    }
    if (elClic.hasAttribute('data-js-action3')) {
      img = elClic.dataset.jsAction3;
      elImg3.src = `img/${img}`;
    }
    if (elClic.hasAttribute('data-js-action4')) {
      img = elClic.dataset.jsAction4;
      elImg4.src = `img/${img}`;
    }
    if (elClic.hasAttribute('data-js-action5')) {
      img = elClic.dataset.jsAction5;
      elImg5.src = `img/${img}`;
    }
    if (elClic.hasAttribute('data-js-action6')) {
      img = elClic.dataset.jsAction6;
      elImg6.src = `img/${img}`;
    }
    
    // Gérer l'affichage des ellipses
    const allEllipses = document.querySelectorAll('.ellipse-navy, .ellipse-noir, .ellipse-vert, .ellipse-rouge');
    allEllipses.forEach(ellipse => ellipse.style.display = 'none'); // Cacher toutes les ellipses

    // Vérifier si le bouton cliqué correspond à une couleur
    if (elClic.classList.contains('noir')) {
      document.querySelector('.ellipse-noir').style.display = 'block';
    } else if (elClic.classList.contains('navy')) {
      document.querySelector('.ellipse-navy').style.display = 'block';
    } else if (elClic.classList.contains('vert')) {
      document.querySelector('.ellipse-vert').style.display = 'block';
    } else if (elClic.classList.contains('rouge')) {
      document.querySelector('.ellipse-rouge').style.display = 'block';
    }
  });

  const elClass = document.querySelector('[data-js-descriptionOuverte]'),
        elClass2 = document.querySelector('[data-js-tailleOuverte]'),
        elDefilementInfoSup = document.querySelectorAll('[data-js-infoSup]');

  let defileDescrip = false;
  let defilTaille = false;

  elDefilementInfoSup.forEach(el => {
    el.addEventListener('click', (e) => {
      let elClInfo = e.target;

      const allInfoSup = document.querySelectorAll('.description-ouverte, .tailles-ouverte');
      allInfoSup.forEach(info => info.style.display = 'none'); // Cacher toutes les supp infos

      if (elClInfo.classList.contains('description-normale')) {
        if (defileDescrip) {
          document.querySelector('.description-ouverte').style.display = 'none';
          defileDescrip = false;
        } else {
          document.querySelector('.description-ouverte').style.display = 'flex';
          defileDescrip = true;
        }
      } else if (elClInfo.classList.contains('tailles-normale')) {
        if (defilTaille) {
          document.querySelector('.tailles-ouverte').style.display = 'none';
          defilTaille = false;
        } else {
          document.querySelector('.tailles-ouverte').style.display = 'block';
          defilTaille = true;
        }
      }
    });
  });

  const infolettre = document.querySelector('.infolettre');
  const conteneurGroupe = document.querySelector('.conteneurGroupe');
  const originalParent = document.querySelector('.retour-infolettre');

  function moveInfolettre() {
    if (window.innerWidth >= 577) {
      if (!conteneurGroupe.contains(infolettre)) {
        conteneurGroupe.appendChild(infolettre);
      }
    } else {
      if (!originalParent.contains(infolettre)) {
        originalParent.appendChild(infolettre);
      }
    }
  }

  window.addEventListener('resize', moveInfolettre);
  moveInfolettre();

  const menuIcon = document.getElementById('menu-icon');
  const menu = document.getElementById('menu');
  const body = document.querySelector('body');
  const fermerMenu = document.getElementById('fermer-menu');
  
  menuIcon.addEventListener('click', function() {
    menu.style.display = 'grid';
    body.style.overflow = 'hidden';
  });

  fermerMenu.addEventListener('click', function() {
    menu.style.display = 'none';
    body.style.overflow = 'auto';
  });

  // gestion animation du panier  
  const btnPanier = document.querySelector('.ajout-panier');
  const ajoutPanier = document.getElementById('article-ajouter-panier');
  const fermerPopUp = document.getElementById('fermer-ajouter-panier');
  const main = document.querySelector('main');
  const header = document.querySelector('header');
  
  btnPanier.addEventListener('click', function() {
    ajoutPanier.style.display = 'grid';
    body.style.overflow = 'hidden';
    main.classList.add('blur');
    header.classList.add('blur');
    
    // Mettre à jour l'image dans le panier
    const sourceImage = document.getElementById('sourceImage');
    const copieImage = document.getElementById('copieImage');
    if (sourceImage && copieImage) {
      copieImage.src = sourceImage.src;
    }
  });
  
  fermerPopUp.addEventListener('click', function() {
    ajoutPanier.style.display = 'none';
    body.style.overflow = 'auto';
    main.classList.remove('blur');
    header.classList.remove('blur');
  });
});