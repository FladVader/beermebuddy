import { RandomImg } from 'src/app/interfaces/randomImg';

export class GlobalConstants {
  public static neverHaveIMG: string = 'assets/images/default-neverhave.gif';
  public static mostLikelyIMG: string = 'assets/images/default-mostlikely.png';
  public static welcomeIMG: string = 'assets/images/default-welcome.png';

  public static randoIMG: RandomImg[] = [
    {
      id: 1,
      url: 'https://ih1.redbubble.net/image.962801673.3311/st,small,507x507-pad,600x600,f8f8f8.jpg',
    },
    {
      id: 2,
      url: 'https://storage.googleapis.com/com-daily-stickers.appspot.com/optimized/packs/4991FE04-60C9-452B-ACC5-B89A76B616E6/stickers/ECE3A05B-A36F-4115-9AD2-AC5FCE36C5A1/file/23da089f-458a-4330-a2e0-98ba78fb6783.webp',
    },
    {
      id: 3,
      url: 'https://i.redd.it/wzb9dqcrat551.jpg',
    },
    {
      id: 4,
      url: 'https://snipstock.com/assets/cdn/png/e675c19765e17bd3cec096e8f5b01f85.png',
    },
    {
      id: 5,
      url: 'https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2020/02/09/6392b082-4b04-11ea-befc-ef9687daaa85_image_hires_142454.JPG?itok=QqSjO6Xo&v=1581229503',
    },
    {
      id: 6,
      url: "https://runt-of-the-web.com/wordpress/wp-content/uploads/2013/11/wtf-people-of-walmart.jpg"
    },
    {
      id: 7,
      url: "https://pbs.twimg.com/media/BN5JbelCMAAHJpZ.jpg"
    }
  ];
}
