import DefaultLayout from "@/layouts/DefaultLayout";
import HomeSection from "@/view/HomeSection";
import NavigationAndInfo from "@/view/NavigationAndInfo";


export default function Home() {
  return (
    <>
      <DefaultLayout>
        <NavigationAndInfo>
          <HomeSection />
        </NavigationAndInfo>
      </DefaultLayout>
    </>
  );
}
