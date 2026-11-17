import Link from "next/link";
const mockUrls = ["https://hc8bkhqifz.ufs.sh/f/5eAWk3dyw5ampgb2Jo73f5HMjGCz1Y4EBmOZaFWbXAJrkNqs" , "https://hc8bkhqifz.ufs.sh/f/5eAWk3dyw5amuYP0FqGh5D1xca4SEAtQoJR6qvkYwie8OV3b" , "https://hc8bkhqifz.ufs.sh/f/5eAWk3dyw5am8sPh3kWB1KUv5LRstjWqgAlByimdGNFXZaHb"]
const description = ["Beach Sunset", "Blue Electric Guitar", "Hawaii"]
 const mockImages = mockUrls.map((url, index, caption) => ({
      id: index + 1, 
      url,
      caption: description[index]
      }));
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-black">
     <div className="flex flex-wrap gap-4 bg-[#50d7e]">{
      mockImages.map((image) => (
      
        <div key ={image.id} className="w-48">
    
          <img src={image.url} alt="image" />
          <p>{image.caption}</p>
           
        </div>

       
      ))
    }
    </div>
    <Link href="/layer02">yay</Link>
    </main>
  );
}
 