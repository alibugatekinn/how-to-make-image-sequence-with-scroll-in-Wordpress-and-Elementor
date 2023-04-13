# how-to-image-sequence-with-scroll-in-Wordpress-and-Elementor

If you are using Elementor on WordPress, you need to create 5 containers. The container at the top should have a higher z-index property than the following 3 containers, and its position property should be fixed. The z-index property of the bottom container should be higher than that of the top container, and its position can be normal. This way, the top fixed container will move over the others and stay under the bottom container. The image-sequence animation will be completed.

Depending on the size of your image sequence, you can create more containers at the bottom. This will make the scroll longer and allow you to process more images.

Now, let's say you have divided a video into frames. The names of these frames should be in sequential order with numbers (e.g., 1.png, 2.png, 3.png). We will call them in the script by increasing the integer i variable.

Upload these frames to the media section of WordPress. Click on the first frame image to copy its permanent link, and paste it into the frame name variable by deleting the number.png (or number.jpg) part at the end of the link. The frame count variable should indicate the total number of frames.

The code will assign the numbers automatically. You just need to add the part you deleted from the end of the link (e.g., -scaled.png) to the end of the number in the variable.

We will use the top container for the image sequence, so give it an ID and replace the sequence-container-1 in the code with your ID.

This code will load the photos when the web page loads and change the background every 15 pixels of scroll, playing your video animation. The video will rewind when the scroll goes up. You can change the 15 pixel value as desired.


if you need more help, you can send a mail. if it is possible , i answer you
help : alibugatekin@gmail.com
