$(document).ready(function(){

  // ヘッダーの読み込み
  $(function(){
    $("#header-placeholder").load("../includes/header.html");
  });

  // フッターの読み込み
  $(function(){
    $("#footer-placeholder").load("../includes/footer.html");
  });

  // トップ画像のカルーセル設定
  $('.top-photo-carousel').slick({
    autoplay: true,
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
    autoplaySpeed: 3000,
  });

  // トップ・サービス一覧の切り替え表示
  $('.bt-switching').click(function () {
    // ボタンのアクティブ切り替え
    $('.bt-switching').removeClass('active');
    $(this).addClass('active');

    // クリックされたボタンが何番目かを取得
    const index = $('.bt-switching').index(this);

    // service-listを切り替え
    $('.service-list').removeClass('show').eq(index).addClass('show');
  });

  // サービス・個別ページ画像のカルーセル設定
  $('.carousel-elements').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,       // 前後の矢印
    dots: true,         // ドットナビゲーション
    autoplay: false,     // 自動再生
    autoplaySpeed: 3000 // 3秒ごとに切り替え
  });

  // よくある質問のトグルボタン
  $('.toggle-content').hide(); // 最初は非表示

    $('.toggle-button').on('click', function () {
      const content = $(this).next('.toggle-content');
      const icon = $(this).find('.toggle-icon');

      // 表示・非表示をトグル
      content.slideToggle(300);

      // + と - を切り替え
      if (icon.text() === '+') {
        icon.text('−'); // 全角ハイフンでデザイン的に綺麗
      } else {
        icon.text('+');
      }
    });


  const navMore = document.querySelector('.nav-more');
  const atHomeItem = document.querySelector('.at-home-hover');

  atHomeItem.addEventListener('mouseenter', () => {
    navMore.style.display = 'block';
  });

  atHomeItem.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!navMore.matches(':hover')) {
        navMore.style.display = 'none';
      }
    }, 100);
  });

  navMore.addEventListener('mouseleave', () => {
    navMore.style.display = 'none';
  });
});