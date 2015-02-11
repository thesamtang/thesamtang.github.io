(function($){
  $(function(){
      
      $('.dropdown-button').dropdown({hover: false});
      
      $(".button-collapse").sideNav();
      
      var portraits = [
          {
              image: '../img/portraits/1-L.jpg',
              thumb: '../img/portraits/1-T.jpg',
          },
          {
              image: '../img/portraits/2-L.jpg',
              thumb: '../img/portraits/2-T.jpg',
          },
          {
              image: '../img/portraits/3-L.jpg',
              thumb: '../img/portraits/3-T.jpg',
          },
          {
              image: '../img/portraits/4-L.jpg',
              thumb: '../img/portraits/4-T.jpg',
          },
          {
              image: '../img/portraits/5-L.jpg',
              thumb: '../img/portraits/5-T.jpg',
          },
          {
              image: '../img/portraits/6-L.jpg',
              thumb: '../img/portraits/6-T.jpg',
          },
          {
              image: '../img/portraits/7-L.jpg',
              thumb: '../img/portraits/7-T.jpg',
          },
          {
              image: '../img/portraits/8-L.jpg',
              thumb: '../img/portraits/8-T.jpg',
          },
          {
              image: '../img/portraits/9-L.jpg',
              thumb: '../img/portraits/9-T.jpg',
          },
          {
              image: '../img/portraits/11-L.jpg',
              thumb: '../img/portraits/11-T.jpg',
          },
          {
              image: '../img/portraits/12-L.jpg',
              thumb: '../img/portraits/12-T.jpg',
          },
          {
              image: '../img/portraits/13-L.jpg',
              thumb: '../img/portraits/13-T.jpg',
          },
          {
              image: '../img/portraits/14-L.jpg',
              thumb: '../img/portraits/14-T.jpg',
          },
          {
              image: '../img/portraits/15-L.jpg',
              thumb: '../img/portraits/15-T.jpg',
          },
          {
              image: '../img/portraits/16-L.jpg',
              thumb: '../img/portraits/16-T.jpg',
          },
          {
              image: '../img/portraits/17-L.jpg',
              thumb: '../img/portraits/17-T.jpg',
          },
          {
              image: '../img/portraits/18-L.jpg',
              thumb: '../img/portraits/18-T.jpg',
          },
          {
              image: '../img/portraits/19-L.jpg',
              thumb: '../img/portraits/19-T.jpg',
          },
          {
              image: '../img/portraits/20-L.jpg',
              thumb: '../img/portraits/20-T.jpg',
          },
          {
              image: '../img/portraits/21-L.jpg',
              thumb: '../img/portraits/21-T.jpg',
          },
          {
              image: '../img/portraits/22-L.jpg',
              thumb: '../img/portraits/22-T.jpg',
          },
          {
              image: '../img/portraits/23-L.jpg',
              thumb: '../img/portraits/23-T.jpg',
          },
          {
              image: '../img/portraits/24-L.jpg',
              thumb: '../img/portraits/24-T.jpg',
          },
          {
              image: '../img/portraits/25-L.jpg',
              thumb: '../img/portraits/25-T.jpg',
          },
          {
              image: '../img/portraits/26-L.jpg',
              thumb: '../img/portraits/26-T.jpg',
          },
          {
              image: '../img/portraits/27-L.jpg',
              thumb: '../img/portraits/27-T.jpg',
          },
          {
              image: '../img/portraits/28-L.jpg',
              thumb: '../img/portraits/28-T.jpg',
          },
          {
              image: '../img/portraits/29-L.jpg',
              thumb: '../img/portraits/29-T.jpg',
          },
          {
              image: '../img/portraits/30-L.jpg',
              thumb: '../img/portraits/30-T.jpg',
          },
          {
              image: '../img/portraits/31-L.jpg',
              thumb: '../img/portraits/31-T.jpg',
          },
          {
              image: '../img/portraits/32-L.jpg',
              thumb: '../img/portraits/32-T.jpg',
          },
          {
              image: '../img/portraits/33-L.jpg',
              thumb: '../img/portraits/33-T.jpg',
          },
          {
              image: '../img/portraits/34-L.jpg',
              thumb: '../img/portraits/34-T.jpg',
          },
          {
              image: '../img/portraits/35-L.jpg',
              thumb: '../img/portraits/35-T.jpg',
          },
          {
              image: '../img/portraits/36-L.jpg',
              thumb: '../img/portraits/36-T.jpg',
          },
          {
              image: '../img/portraits/37-L.jpg',
              thumb: '../img/portraits/37-T.jpg',
          },
          {
              image: '../img/portraits/38-L.jpg',
              thumb: '../img/portraits/38-T.jpg',
          },
          {
              image: '../img/portraits/39-L.jpg',
              thumb: '../img/portraits/39-T.jpg',
          },
          {
              image: '../img/portraits/40-L.jpg',
              thumb: '../img/portraits/40-T.jpg',
          },
          {
              image: '../img/portraits/41-L.jpg',
              thumb: '../img/portraits/41-T.jpg',
          },
          {
              image: '../img/portraits/42-L.jpg',
              thumb: '../img/portraits/42-T.jpg',
          },
          {
              image: '../img/portraits/43-L.jpg',
              thumb: '../img/portraits/43-T.jpg',
          },
          {
              image: '../img/portraits/44-L.jpg',
              thumb: '../img/portraits/44-T.jpg',
          },
          {
              image: '../img/portraits/45-L.jpg',
              thumb: '../img/portraits/45-T.jpg',
          },
          {
              image: '../img/portraits/46-L.jpg',
              thumb: '../img/portraits/46-T.jpg',
          },
          {
              image: '../img/portraits/47-L.jpg',
              thumb: '../img/portraits/47-T.jpg',
          }
      ];
      
      var levitation = [
          {
              image: '../img/levitation/1-L.jpg',
              thumb: '../img/levitation/1-T.jpg',
          },
          {
              image: '../img/levitation/2-L.jpg',
              thumb: '../img/levitation/2-T.jpg',
          },
          {
              image: '../img/levitation/3-L.jpg',
              thumb: '../img/levitation/3-T.jpg',
          },
          {
              image: '../img/levitation/4-L.jpg',
              thumb: '../img/levitation/4-T.jpg',
          },
          {
              image: '../img/levitation/5-L.jpg',
              thumb: '../img/levitation/5-T.jpg',
          },
          {
              image: '../img/levitation/6-L.jpg',
              thumb: '../img/levitation/6-T.jpg',
          },
          {
              image: '../img/levitation/7-L.jpg',
              thumb: '../img/levitation/7-T.jpg',
          },
          {
              image: '../img/levitation/8-L.jpg',
              thumb: '../img/levitation/8-T.jpg',
          },
          {
              image: '../img/levitation/9-L.jpg',
              thumb: '../img/levitation/9-T.jpg',
          },
          {
              image: '../img/levitation/10-L.jpg',
              thumb: '../img/levitation/10-T.jpg',
          },
          {
              image: '../img/levitation/11-L.jpg',
              thumb: '../img/levitation/11-T.jpg',
          },
          {
              image: '../img/levitation/12-L.jpg',
              thumb: '../img/levitation/12-T.jpg',
          }
      ];
      
      var fireworks = [
          {
              image: '../img/fireworks/1-L.jpg',
              thumb: '../img/fireworks/1-T.jpg',
          },
          {
              image: '../img/fireworks/2-L.jpg',
              thumb: '../img/fireworks/2-T.jpg',
          },
          {
              image: '../img/fireworks/3-L.jpg',
              thumb: '../img/fireworks/3-T.jpg',
          },
          {
              image: '../img/fireworks/4-L.jpg',
              thumb: '../img/fireworks/4-T.jpg',
          },
          {
              image: '../img/fireworks/5-L.jpg',
              thumb: '../img/fireworks/5-T.jpg',
          }
      ];
      
      var misc = [
          {
              image: '../img/misc/1-L.jpg',
              thumb: '../img/misc/1-T.jpg',
          },
          {
              image: '../img/misc/2-L.jpg',
              thumb: '../img/misc/2-T.jpg',
          },
          {
              image: '../img/misc/3-L.jpg',
              thumb: '../img/misc/3-T.jpg',
          },
          {
              image: '../img/misc/4-L.jpg',
              thumb: '../img/misc/4-T.jpg',
          },
          {
              image: '../img/misc/5-L.jpg',
              thumb: '../img/misc/5-T.jpg',
          },
          {
              image: '../img/misc/6-L.jpg',
              thumb: '../img/misc/6-T.jpg',
          },
          {
              image: '../img/misc/7-L.jpg',
              thumb: '../img/misc/7-T.jpg',
          },
          {
              image: '../img/misc/8-L.jpg',
              thumb: '../img/misc/8-T.jpg',
          },
          {
              image: '../img/misc/9-L.jpg',
              thumb: '../img/misc/9-T.jpg',
          },
          {
              image: '../img/misc/10-L.jpg',
              thumb: '../img/misc/10-T.jpg',
          },
          {
              image: '../img/misc/11-L.jpg',
              thumb: '../img/misc/11-T.jpg',
          },
          {
              image: '../img/misc/12-L.jpg',
              thumb: '../img/misc/12-T.jpg',
          },
          {
              image: '../img/misc/13-L.jpg',
              thumb: '../img/misc/13-T.jpg',
          },
          
      ];
      
      
      Galleria.loadTheme('../galleria/themes/folio/galleria.folio.min.js');
      Galleria.run('.galleria', {dataSource: portraits});
      
      $('#portraits').click(function() {
          Galleria.run('.galleria', {dataSource: portraits});
      });
      $('#levitation').click(function() {
          Galleria.run('.galleria', {dataSource: levitation});
      });
      $('#fireworks').click(function() {
          Galleria.run('.galleria', {dataSource: fireworks});
      });
      $('#misc').click(function() {
          Galleria.run('.galleria', {dataSource: misc});
      });
      
  }); // end of document ready
})(jQuery); // end of jQuery name space
