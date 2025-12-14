import { Sparkles } from 'lucide-react';

const PreLaunchNote = () => {
  return (
    <section className="py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
        <h3 className="font-serif text-2xl text-foreground mb-4">
          A Note from Our Kitchen
        </h3>
        <p className="text-body">
          This is a <strong className="text-foreground">pre-launch, small-batch creation</strong> crafted 
          to gather feedback from our community. Each jar is made with care and attention, 
          just as Aapa has always done. Your thoughts and love mean the world to us as we 
          embark on this journey together.
        </p>
      </div>
    </section>
  );
};

export default PreLaunchNote;
