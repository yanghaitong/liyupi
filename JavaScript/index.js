/**
 * 弹窗
 * 
 * @author haitong
 */
function dome() {
    document.querySelector('.web_notice').remove()
}


window.onload = choosePic;
/**
 * 随机头像
 * 
 * @author haitong
 */
function choosePic() {
        var myPix = new Array(
            "https://img-blog.csdnimg.cn/09f0fcc3efd84cd79a3998ed81570475.png#pic_center",
            "https://img-blog.csdnimg.cn/34125078cbc44871b53fdd69d71ff2b3.png#pic_center",
            "https://img-blog.csdnimg.cn/8e833b2a74ea45239ac783e62972d54a.png#pic_center",
            "https://img-blog.csdnimg.cn/df3db4d7ad42404d9f6fa0d6de15c9b3.png#pic_center",
            "https://img-blog.csdnimg.cn/c5c8e6c2ee7b42c9ae53ff185f45ee42.png#pic_center",
            "https://img-blog.csdnimg.cn/a45394119cc64dfebcf14e2a14cd08de.png#pic_center",
            "https://img-blog.csdnimg.cn/33817125dd8b4cb0852ba1d9e7d1d04e.png#pic_center",
            "https://img-blog.csdnimg.cn/60f1a6fe5689413fa505c12c8d17e4a8.png#pic_center",
            "https://img-blog.csdnimg.cn/34cffbf74eb2485d892d6285e090046c.png#pic_center",
            "https://img-blog.csdnimg.cn/593fa9528af244c69c9ea97392811e17.png#pic_center",
            "https://img-blog.csdnimg.cn/cb2f9f7f2e4b448ca924f3475e0cfc3d.png#pic_center",
            "https://img-blog.csdnimg.cn/27892e92f4cc435a9788d9b95d2410dd.png#pic_center",
            "https://img-blog.csdnimg.cn/70ccbe5fa9a44998993b8a7270bf8d28.png#pic_center",
            "https://img-blog.csdnimg.cn/17ee2d446842434ea15b99878b916947.jpeg#pic_center",
            "https://img-blog.csdnimg.cn/a6d71a722e9c4f81a742729665e54e0e.jpeg#pic_center",
            "https://img-blog.csdnimg.cn/feda167bfc6244329decb8a9559bb82c.png",
            "https://img-blog.csdnimg.cn/2fe5030daac3480ea63881fa406fb485.bmp#pic_center",
            "https://img-blog.csdnimg.cn/b33d9108c404471fbcef7209bf6ec0b5.png#pic_center",
            // "",
            // "",
            // "",
            // "",
        );
        var randomNum = Math.floor((Math.random() * myPix.length));
        document.getElementById("suiji-portrait").src = myPix[randomNum];
}