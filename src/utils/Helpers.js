import i18n from "@/i18n";

export const isRTL = () => i18n.language === "ar";
export const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export async function urlToBlob(imageUrl) {
    try {
        // Fetch the image from the URL
        const response = await fetch(imageUrl);
        
        // Ensure the fetch was successful
        if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.statusText}`);
        }
        
        // Convert the image to a Blob
        const imageBlob = await response.blob();
        
        return imageBlob;
    } catch (error) {
        console.error('Error converting URL to Blob:', error);
    }
}