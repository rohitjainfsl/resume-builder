import HeaderInner from "./HeaderInner";
import ResumeSection from "./ResumeSection";
import ResumePreview from "./ResumePreview";

function NewResumeWrapper() {
  return (
    <main className="flex">
      <HeaderInner />
      <section id="resume-section" className="w-4/5 flex">
        <ResumeSection />
        <ResumePreview />
      </section>
    </main>
  );
}

export default NewResumeWrapper;
