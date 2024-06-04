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


export const adminEmail = "admin@admin.com";
export const ithraaEmail = "ithraa@admin.com";
export const albeitEmail = "albeit@admin.com";
export const correctPassword = "password123";
export function extractTimeWithAmPm(isoString) {
    let date = new Date(isoString);
    let hours = date.getUTCHours(); 
    let minutes = date.getUTCMinutes();
    let seconds = date.getUTCSeconds();
    let ampm = hours >= 12 ? 'م' : 'ص';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    let extractedTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    return extractedTime;
}

