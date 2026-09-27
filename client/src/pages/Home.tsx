import { FormEvent, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  Bell,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageCircle,
  Moon,
  MoreHorizontal,
  NotebookPen,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  Sparkles,
  Star,
  Sun,
  Target,
  TrendingUp,
  UserRound,
  X,
  type LucideIcon,
} from "lucide-react";

type SectionKey = "overview" | "homework" | "classwork" | "performance" | "holidays" | "notices";

type NavItem = {
  key: SectionKey;
  label: string;
  caption: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { key: "overview", label: "Overview", caption: "Your study space", icon: LayoutDashboard },
  { key: "homework", label: "My homework", caption: "4 active tasks", icon: NotebookPen },
  { key: "classwork", label: "Classwork", caption: "Recent lessons", icon: BookOpen },
  { key: "performance", label: "My performance", caption: "Term progress", icon: TrendingUp },
  { key: "holidays", label: "Holiday list", caption: "Academic calendar", icon: CalendarDays },
  { key: "notices", label: "Notice board", caption: "3 new updates", icon: Bell },
];

export const portalSectionKeys = navItems.map((item) => item.key);

const homeworkItems = [
  { subject: "Mathematics", title: "Linear equations worksheet", due: "Today, 5:00 PM", status: "Due today", tone: "amber", icon: "∑" },
  { subject: "English Literature", title: "Read chapter 6 & add notes", due: "Tomorrow", status: "In progress", tone: "violet", icon: "Aa" },
  { subject: "Physics", title: "Lab report: refraction", due: "Friday, 28 Sep", status: "Not started", tone: "blue", icon: "ϟ" },
  { subject: "History", title: "Timeline of the Industrial Revolution", due: "Monday, 01 Oct", status: "Not started", tone: "rose", icon: "✦" },
];

const classworkItems = [
  { subject: "Chemistry", title: "Acids, bases & indicators", teacher: "Ms. Nandita Rao", time: "Today · Period 2", icon: "C", tone: "teal" },
  { subject: "Mathematics", title: "Graphs and coordinate planes", teacher: "Mr. Vikram Shah", time: "Today · Period 4", icon: "∑", tone: "violet" },
  { subject: "Computer Science", title: "Intro to algorithms", teacher: "Mr. Arjun Menon", time: "Yesterday · Period 6", icon: "</>", tone: "blue" },
];

const holidays = [
  { date: "02", month: "OCT", title: "Gandhi Jayanti", day: "Wednesday", type: "National holiday" },
  { date: "11", month: "OCT", title: "Dussehra break", day: "Friday", type: "School holiday" },
  { date: "31", month: "OCT", title: "Diwali", day: "Thursday", type: "Festival holiday" },
  { date: "25", month: "DEC", title: "Christmas Day", day: "Wednesday", type: "National holiday" },
];

const notices = [
  { title: "Inter-house quiz registrations are open", body: "Register your team before 30 September with your class teacher.", date: "2 hours ago", tag: "Activities", color: "#7c5cff" },
  { title: "Updated exam timetable is now available", body: "The mid-term examination schedule has been updated for grades 8–10.", date: "Yesterday", tag: "Academics", color: "#0ea5a4" },
  { title: "Bring your library books tomorrow", body: "All borrowed books are due for the monthly library audit.", date: "23 Sep", tag: "Library", color: "#e49b4d" },
];

const performance = [
  { subject: "Mathematics", score: 92, trend: "+6%", color: "#7c5cff" },
  { subject: "Science", score: 88, trend: "+4%", color: "#0ea5a4" },
  { subject: "English", score: 84, trend: "+2%", color: "#e49b4d" },
  { subject: "Social Studies", score: 78, trend: "—", color: "#eb7a74" },
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[13px] bg-[#7559e8] shadow-[0_8px_20px_rgba(117,89,232,0.3)]">
        <div className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-[#a595ff]" />
        <div className="absolute -bottom-2 -left-2 h-6 w-6 rounded-full bg-[#5b42c5]" />
        <GraduationCap className="relative z-10 h-5 w-5 text-white" strokeWidth={2.1} />
      </div>
      {!compact && <div className="leading-none"><p className="font-display text-[18px] font-bold tracking-[-0.04em] text-[#27243a]">student<span className="text-[#7559e8]">portal</span></p><p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9a96aa]">learn · grow · shine</p></div>}
    </div>
  );
}

function LoginScreen({ onLogin }: { onLogin: (studentId: string) => void }) {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!studentId.trim() || !password.trim()) {
      setError("Enter your student ID and password to continue.");
      return;
    }
    onLogin(studentId.trim());
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f2fa] text-[#27243a]">
      <div className="grid min-h-screen lg:grid-cols-[minmax(470px,0.9fr)_1.1fr]">
        <section className="relative hidden overflow-hidden bg-[#242139] px-12 py-11 text-white lg:flex lg:flex-col lg:justify-between xl:px-20">
          <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.17]" />
          <div className="absolute -left-28 top-[24%] h-[420px] w-[420px] rounded-full border border-white/10" />
          <div className="absolute -left-10 top-[31%] h-[285px] w-[285px] rounded-full border border-white/10" />
          <div className="absolute -bottom-28 -right-32 h-[490px] w-[490px] rounded-full bg-[#7559e8]/20 blur-2xl" />
          <div className="relative z-10"><BrandMark /><p className="mt-24 max-w-[390px] font-display text-[48px] font-semibold leading-[1.06] tracking-[-0.055em]">Small steps.<br /><span className="text-[#a595ff]">Big possibilities.</span></p><p className="mt-7 max-w-[340px] text-[15px] leading-7 text-[#b8b4cd]">Everything you need to stay curious, keep learning, and make progress every day.</p></div>
          <div className="relative z-10 flex items-end justify-between gap-6 text-[12px] text-[#a7a2bc]"><p>© 2026 student portal</p><div className="flex gap-5"><span>Help center</span><span>Privacy</span></div></div>
        </section>
        <section className="flex min-h-screen flex-col bg-[#f4f2fa]">
          <div className="flex items-center justify-between px-6 py-6 lg:hidden"><BrandMark compact /><span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#aaa6b8]">Student space</span></div>
          <div className="mx-auto flex w-full max-w-[600px] flex-1 flex-col justify-center px-6 py-10 sm:px-12 lg:px-20 xl:px-28">
            <div className="mb-10"><div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e8e2ff] text-[#7559e8]"><Sparkles className="h-5 w-5" /></div><p className="mb-2 text-[12px] font-bold uppercase tracking-[0.18em] text-[#918ba9]">Welcome back</p><h1 className="font-display text-[40px] font-semibold leading-tight tracking-[-0.055em] text-[#27243a]">Your learning space<br /><span className="text-[#7559e8]">is waiting.</span></h1><p className="mt-4 text-[15px] leading-6 text-[#858198]">Sign in to check your lessons, tasks, and progress.</p></div>
            <form onSubmit={submit} className="space-y-5">
              <label className="block"><span className="mb-2.5 block text-[12px] font-bold uppercase tracking-[0.12em] text-[#706b83]">Student ID</span><div className="relative"><UserRound className="absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#aaa5ba]" /><input value={studentId} onChange={(e) => { setStudentId(e.target.value); setError(""); }} className="h-14 w-full rounded-2xl border border-[#e4e0ee] bg-white pl-12 pr-4 text-[15px] font-medium text-[#27243a] shadow-[0_5px_20px_rgba(47,41,76,0.03)] outline-none transition placeholder:text-[#bab6c6] focus:border-[#9c8bf1] focus:ring-4 focus:ring-[#7559e8]/10" placeholder="e.g. STU-2048" autoComplete="username" /></div></label>
              <label className="block"><span className="mb-2.5 block text-[12px] font-bold uppercase tracking-[0.12em] text-[#706b83]">Password</span><div className="relative"><div className="absolute left-4 top-1/2 flex -translate-y-1/2 gap-[3px]"><span className="h-1.5 w-1.5 rounded-full bg-[#aaa5ba]" /><span className="h-1.5 w-1.5 rounded-full bg-[#aaa5ba]" /><span className="h-1.5 w-1.5 rounded-full bg-[#aaa5ba]" /></div><input type={showPassword ? "text" : "password"} value={password} onChange={(e) => { setPassword(e.target.value); setError(""); }} className="h-14 w-full rounded-2xl border border-[#e4e0ee] bg-white pl-12 pr-24 text-[15px] font-medium text-[#27243a] shadow-[0_5px_20px_rgba(47,41,76,0.03)] outline-none transition placeholder:text-[#bab6c6] focus:border-[#9c8bf1] focus:ring-4 focus:ring-[#7559e8]/10" placeholder="Enter your password" autoComplete="current-password" /><button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7559e8]">{showPassword ? "Hide" : "Show"}</button></div></label>
              {error && <p className="rounded-xl bg-[#fff0ee] px-4 py-3 text-[13px] font-medium text-[#c05a55]">{error}</p>}
              <div className="flex items-center justify-between pt-1"><label className="flex items-center gap-2 text-[13px] text-[#858198]"><input type="checkbox" className="h-4 w-4 rounded border-[#d5d0e0] accent-[#7559e8]" /> Remember me</label><button type="button" className="text-[13px] font-bold text-[#7559e8] transition hover:text-[#5037b1]">Forgot password?</button></div>
              <button type="submit" className="group mt-3 flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#7559e8] text-[14px] font-bold text-white shadow-[0_12px_26px_rgba(117,89,232,0.25)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#6749d8] active:scale-[0.98]">Enter student portal <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button>
            </form>
            <div className="mt-8 flex items-center gap-3 text-[12px] text-[#a6a1b2]"><div className="h-px flex-1 bg-[#e2deeb]" /><span>Need help?</span><div className="h-px flex-1 bg-[#e2deeb]" /></div><p className="mt-4 text-center text-[13px] text-[#8b869b]">Contact your class teacher or <button className="font-bold text-[#7559e8]">school office</button></p><p className="mt-8 text-center text-[11px] text-[#b0acbb]">Demo access: <span className="font-bold text-[#88819f]">STU-2048</span> / <span className="font-bold text-[#88819f]">welcome</span></p>
          </div>
        </section>
      </div>
    </main>
  );
}

function StatCard({ icon: Icon, label, value, detail, tone, progress }: { icon: LucideIcon; label: string; value: string; detail: string; tone: string; progress?: number }) {
  return <div className="card-lift rounded-[22px] border border-[#e9e6f0] bg-white p-5 shadow-[0_8px_28px_rgba(47,41,76,0.045)]"><div className="flex items-start justify-between"><div className={`flex h-10 w-10 items-center justify-center rounded-[13px] ${tone}`}><Icon className="h-[18px] w-[18px]" /></div><MoreHorizontal className="h-[18px] w-[18px] text-[#b6b2c1]" /></div><p className="mt-5 text-[12px] font-semibold text-[#9590a4]">{label}</p><div className="mt-1 flex items-baseline gap-2"><p className="font-display text-[28px] font-bold tracking-[-0.05em] text-[#29263e]">{value}</p><span className="text-[11px] font-semibold text-[#5ca88d]">{detail}</span></div>{progress !== undefined && <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#f0eef5]"><div className="h-full rounded-full bg-[#7559e8]" style={{ width: `${progress}%` }} /></div>}</div>;
}

function SectionHeading({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: string }) {
  return <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#9b96a9]">{eyebrow}</p><h1 className="font-display text-[30px] font-bold tracking-[-0.055em] text-[#2b2840] sm:text-[34px]">{title}</h1><p className="mt-2 text-[14px] text-[#928da1]">{description}</p></div>{action && <button className="flex items-center gap-2 self-start rounded-xl border border-[#e4e0ec] bg-white px-4 py-2.5 text-[12px] font-bold text-[#706a83] shadow-sm transition hover:border-[#c7bdf0] hover:text-[#7559e8] sm:self-auto">{action}<ChevronRight className="h-3.5 w-3.5" /></button>}</div>;
}

function HomeworkView() {
  const [filter, setFilter] = useState("All tasks");
  const filters = ["All tasks", "Due soon", "Completed"];
  const filtered = filter === "Due soon" ? homeworkItems.slice(0, 2) : filter === "Completed" ? [] : homeworkItems;
  return <div className="animate-fade-in"><SectionHeading eyebrow="Keep moving forward" title="My homework" description="Stay on top of your tasks and never miss a deadline." action="View calendar" /><div className="mb-6 flex gap-2 overflow-x-auto pb-1">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`whitespace-nowrap rounded-full px-4 py-2 text-[12px] font-bold transition ${filter === item ? "bg-[#7559e8] text-white shadow-[0_7px_18px_rgba(117,89,232,0.2)]" : "border border-[#e6e2ee] bg-white text-[#8d889d] hover:border-[#c9bff2]"}`}>{item}</button>)}</div><div className="space-y-3">{filtered.length ? filtered.map((item) => <div key={item.title} className="card-lift flex flex-col gap-4 rounded-[20px] border border-[#e9e6f0] bg-white p-4 shadow-[0_8px_28px_rgba(47,41,76,0.04)] sm:flex-row sm:items-center"><div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] bg-${item.tone}-100 text-[17px] font-display font-bold ${item.tone === "amber" ? "text-amber-600" : item.tone === "violet" ? "text-violet-600" : item.tone === "blue" ? "text-blue-600" : "text-rose-600"}`}>{item.icon}</div><div className="min-w-0 flex-1"><p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#a09bab]">{item.subject}</p><h3 className="mt-1 truncate text-[15px] font-bold text-[#363248]">{item.title}</h3><p className="mt-1 flex items-center gap-1.5 text-[12px] text-[#9b96a8]"><Clock3 className="h-3.5 w-3.5" /> {item.due}</p></div><span className={`self-start rounded-full px-3 py-1.5 text-[11px] font-bold ${item.tone === "amber" ? "bg-[#fff4df] text-[#bc7c1d]" : item.tone === "violet" ? "bg-[#f0edff] text-[#7657d2]" : item.tone === "blue" ? "bg-[#eaf3ff] text-[#5485bd]" : "bg-[#fff0ee] text-[#c66560]"}`}>{item.status}</span><button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f6f4fb] text-[#8d879d] transition hover:bg-[#ebe5ff] hover:text-[#7559e8]"><ArrowUpRight className="h-4 w-4" /></button></div>) : <div className="rounded-[22px] border border-dashed border-[#ddd8e8] bg-white/60 px-6 py-14 text-center"><Check className="mx-auto h-7 w-7 text-[#5ca88d]" /><h3 className="mt-3 font-display text-[18px] font-bold text-[#4c4761]">Nothing here yet</h3><p className="mt-1 text-[13px] text-[#9b96a8]">Completed tasks will appear here.</p></div>}</div></div>;
}

function ClassworkView() {
  return <div className="animate-fade-in"><SectionHeading eyebrow="Your learning trail" title="Classwork" description="Pick up where you left off in class." action="See all subjects" /><div className="grid gap-4 lg:grid-cols-2">{classworkItems.map((item, index) => <div key={item.title} className="card-lift rounded-[22px] border border-[#e9e6f0] bg-white p-5 shadow-[0_8px_28px_rgba(47,41,76,0.04)]"><div className="flex items-start justify-between"><div className={`flex h-12 w-12 items-center justify-center rounded-[15px] text-[16px] font-bold ${item.tone === "teal" ? "bg-[#e1f7f3] text-[#13928d]" : item.tone === "violet" ? "bg-[#f0edff] text-[#7657d2]" : "bg-[#eaf3ff] text-[#5485bd]"}`}>{item.icon}</div><span className="text-[11px] font-bold text-[#aaa5b6]">{index === 0 ? "In progress" : "Reviewed"}</span></div><p className="mt-5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#a09bab]">{item.subject}</p><h3 className="mt-1 text-[17px] font-bold tracking-[-0.02em] text-[#363248]">{item.title}</h3><div className="mt-5 flex items-center justify-between border-t border-[#f0edf5] pt-4"><span className="text-[12px] text-[#938ea1]">{item.teacher}</span><span className="text-[11px] font-semibold text-[#aaa5b6]">{item.time}</span></div></div>)}</div><div className="mt-6 rounded-[22px] bg-[#2d2944] p-6 text-white shadow-[0_15px_32px_rgba(45,41,68,0.15)]"><div className="flex items-start justify-between gap-4"><div><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#b7adf8]">Study tip</p><h3 className="mt-2 font-display text-[23px] font-semibold tracking-[-0.04em]">Make it memorable.</h3><p className="mt-2 max-w-[480px] text-[13px] leading-6 text-[#b7b3c8]">Try explaining today’s lesson to someone else. Teaching is one of the best ways to find what you really understand.</p></div><div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-white/10 sm:flex"><Star className="h-5 w-5 text-[#b9aaff]" /></div></div></div></div>;
}

function PerformanceView() {
  return <div className="animate-fade-in"><SectionHeading eyebrow="A little better every day" title="My performance" description="Your term progress, at a glance." action="Download report" /><div className="grid gap-4 sm:grid-cols-3"><div className="rounded-[22px] bg-[#7559e8] p-5 text-white shadow-[0_12px_28px_rgba(117,89,232,0.22)]"><p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#d0c7ff]">Overall score</p><p className="mt-3 font-display text-[42px] font-bold tracking-[-0.08em]">86<span className="ml-1 text-[20px] font-semibold text-[#d0c7ff]">%</span></p><p className="mt-2 flex items-center gap-1.5 text-[12px] font-semibold text-[#d5ffeb]"><TrendingUp className="h-3.5 w-3.5" /> 4.8% from last term</p></div><div className="rounded-[22px] border border-[#e9e6f0] bg-white p-5 shadow-[0_8px_28px_rgba(47,41,76,0.04)]"><p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#9b96a9]">Tasks completed</p><p className="mt-3 font-display text-[32px] font-bold tracking-[-0.06em] text-[#2b2840]">24 <span className="text-[16px] font-semibold text-[#aaa5b6]">/ 28</span></p><div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#f0eef5]"><div className="h-full w-[86%] rounded-full bg-[#0ea5a4]" /></div><p className="mt-2 text-[11px] text-[#9b96a9]">4 assignments still open</p></div><div className="rounded-[22px] border border-[#e9e6f0] bg-white p-5 shadow-[0_8px_28px_rgba(47,41,76,0.04)]"><p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#9b96a9]">Class rank</p><p className="mt-3 font-display text-[32px] font-bold tracking-[-0.06em] text-[#2b2840]">08 <span className="text-[16px] font-semibold text-[#aaa5b6]">of 42</span></p><p className="mt-4 flex items-center gap-1.5 text-[12px] font-semibold text-[#5ca88d]"><Award className="h-3.5 w-3.5" /> Top 20% of your class</p></div></div><div className="mt-6 rounded-[22px] border border-[#e9e6f0] bg-white p-5 shadow-[0_8px_28px_rgba(47,41,76,0.04)] sm:p-6"><div className="flex items-center justify-between"><div><h3 className="font-display text-[18px] font-bold tracking-[-0.035em] text-[#363248]">Subject performance</h3><p className="mt-1 text-[12px] text-[#9b96a8]">Current term · 2026–27</p></div><button className="rounded-xl bg-[#f6f4fb] px-3 py-2 text-[11px] font-bold text-[#847e96]">This term <ChevronRight className="ml-1 inline h-3 w-3" /></button></div><div className="mt-7 space-y-5">{performance.map((item) => <div key={item.subject} className="flex items-center gap-3"><span className="w-[100px] shrink-0 text-[12px] font-semibold text-[#716b82] sm:w-[130px]">{item.subject}</span><div className="h-3 flex-1 overflow-hidden rounded-full bg-[#f1eef6]"><div className="h-full rounded-full transition-all" style={{ width: `${item.score}%`, backgroundColor: item.color }} /></div><span className="w-8 text-right text-[12px] font-bold text-[#4b465f]">{item.score}</span><span className="hidden w-10 text-right text-[11px] font-semibold text-[#5ca88d] sm:block">{item.trend}</span></div>)}</div></div></div>;
}

function HolidaysView() {
  return <div className="animate-fade-in"><SectionHeading eyebrow="Plan ahead" title="Holiday list" description="School holidays and breaks for the 2026–27 session." action="Add to calendar" /><div className="mb-6 flex items-center gap-3 rounded-[18px] border border-[#e9e6f0] bg-white p-3 shadow-[0_8px_28px_rgba(47,41,76,0.035)]"><div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#fff0ee] text-[#d56f69]"><CalendarDays className="h-5 w-5" /></div><div className="flex-1"><p className="text-[13px] font-bold text-[#4a455d]">Next break is in 5 days</p><p className="mt-0.5 text-[11px] text-[#9b96a9]">Dussehra break · 11 October</p></div><span className="rounded-full bg-[#fff4df] px-3 py-1.5 text-[11px] font-bold text-[#bc7c1d]">5 days</span></div><div className="grid gap-3 sm:grid-cols-2">{holidays.map((holiday, index) => <div key={holiday.title} className="card-lift flex items-center gap-4 rounded-[20px] border border-[#e9e6f0] bg-white p-4 shadow-[0_8px_28px_rgba(47,41,76,0.04)]"><div className={`flex h-[62px] w-[58px] shrink-0 flex-col items-center justify-center rounded-[15px] ${index === 1 ? "bg-[#f0edff] text-[#7657d2]" : "bg-[#f6f3fb] text-[#6d6680]"}`}><span className="font-display text-[23px] font-bold leading-none">{holiday.date}</span><span className="mt-1 text-[9px] font-bold tracking-[0.13em]">{holiday.month}</span></div><div className="min-w-0"><h3 className="truncate text-[14px] font-bold text-[#403b53]">{holiday.title}</h3><p className="mt-1 text-[12px] text-[#9b96a8]">{holiday.day} · {holiday.type}</p></div><ChevronRight className="ml-auto h-4 w-4 shrink-0 text-[#c3bece]" /></div>)}</div></div>;
}

function NoticesView() {
  return <div className="animate-fade-in"><SectionHeading eyebrow="From your school" title="Notice board" description="The latest updates from teachers and school staff." action="Mark all read" /><div className="space-y-3">{notices.map((notice, index) => <div key={notice.title} className={`card-lift relative overflow-hidden rounded-[20px] border bg-white p-5 shadow-[0_8px_28px_rgba(47,41,76,0.04)] ${index === 0 ? "border-[#dcd4ff]" : "border-[#e9e6f0]"}`}><div className="absolute bottom-0 left-0 top-0 w-1" style={{ backgroundColor: notice.color }} /><div className="flex gap-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px]" style={{ backgroundColor: `${notice.color}18`, color: notice.color }}><Bell className="h-[17px] w-[17px]" /></div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><span className="rounded-full px-2.5 py-1 text-[10px] font-bold" style={{ backgroundColor: `${notice.color}18`, color: notice.color }}>{notice.tag}</span>{index === 0 && <span className="flex items-center gap-1 text-[10px] font-bold text-[#7559e8]"><span className="h-1.5 w-1.5 rounded-full bg-[#7559e8]" /> New</span>}</div><h3 className="mt-3 text-[15px] font-bold text-[#3c374f]">{notice.title}</h3><p className="mt-1 max-w-[620px] text-[13px] leading-6 text-[#8e899d]">{notice.body}</p><p className="mt-3 text-[11px] font-semibold text-[#b0abb9]">{notice.date}</p></div><button className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#aaa5b5] hover:bg-[#f5f2fa] sm:flex"><MoreHorizontal className="h-4 w-4" /></button></div></div>)}</div></div>;
}

function Overview({ onNavigate }: { onNavigate: (key: SectionKey) => void }) {
  return <div className="animate-fade-in"><div className="relative mb-6 overflow-hidden rounded-[25px] bg-[#2d2944] p-6 text-white shadow-[0_16px_34px_rgba(45,41,68,0.16)] sm:p-8"><div className="absolute -right-10 -top-24 h-64 w-64 rounded-full border-[24px] border-[#7661df]/30" /><div className="absolute -bottom-24 right-32 h-56 w-56 rounded-full border-[18px] border-[#5fcca9]/20" /><div className="relative z-10 flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-[#bcb3fa]"><Sparkles className="h-3.5 w-3.5" /> Wednesday, 27 September 2026</p><h1 className="mt-4 font-display text-[33px] font-semibold tracking-[-0.06em] sm:text-[38px]">Good morning, Aarav <span className="inline-block">👋</span></h1><p className="mt-3 max-w-[420px] text-[13px] leading-6 text-[#b9b5c9]">You have a focused day ahead. Here’s a quick look at what needs your attention.</p></div><div className="flex shrink-0 items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur"><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#b8a9ff]/20"><Target className="h-4 w-4 text-[#c9c0ff]" /></div><div><p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#aaa3c4]">Daily focus</p><p className="mt-0.5 text-[12px] font-bold text-white">Finish 1 task today</p></div></div></div></div><div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4"><StatCard icon={NotebookPen} label="Active homework" value="04" detail="2 due soon" tone="bg-[#f0edff] text-[#7657d2]" progress={65} /><StatCard icon={TrendingUp} label="Overall performance" value="86%" detail="+4.8%" tone="bg-[#e1f7f3] text-[#13928d]" progress={86} /><StatCard icon={ClipboardCheck} label="Tasks completed" value="24" detail="this term" tone="bg-[#fff4df] text-[#bc7c1d]" progress={82} /><StatCard icon={Award} label="Class rank" value="#08" detail="top 20%" tone="bg-[#fff0ee] text-[#c66560]" /></div><div className="mt-7 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]"><div className="rounded-[22px] border border-[#e9e6f0] bg-white p-5 shadow-[0_8px_28px_rgba(47,41,76,0.04)] sm:p-6"><div className="flex items-start justify-between"><div><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#9b96a9]">Up next</p><h2 className="mt-1 font-display text-[21px] font-bold tracking-[-0.04em] text-[#353048]">Your homework</h2></div><button onClick={() => onNavigate("homework")} className="flex items-center gap-1 text-[12px] font-bold text-[#7559e8]">See all <ArrowUpRight className="h-3.5 w-3.5" /></button></div><div className="mt-5 space-y-2.5">{homeworkItems.slice(0, 3).map((item) => <button key={item.title} onClick={() => onNavigate("homework")} className="group flex w-full items-center gap-3 rounded-[15px] bg-[#faf9fc] p-3 text-left transition hover:bg-[#f2efff]"><div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] text-[12px] font-display font-bold ${item.tone === "amber" ? "bg-[#fff4df] text-[#bc7c1d]" : item.tone === "violet" ? "bg-[#f0edff] text-[#7657d2]" : "bg-[#eaf3ff] text-[#5485bd]"}`}>{item.icon}</div><div className="min-w-0 flex-1"><p className="truncate text-[12px] font-bold text-[#514b63]">{item.title}</p><p className="mt-0.5 text-[10px] text-[#a29daf]">{item.subject} · {item.due}</p></div><span className="hidden rounded-full bg-white px-2 py-1 text-[10px] font-bold text-[#9e98aa] group-hover:text-[#7559e8] sm:block">Open</span><ChevronRight className="h-3.5 w-3.5 text-[#c1bdca] transition group-hover:translate-x-0.5 group-hover:text-[#7559e8]" /></button>)}</div></div><div className="rounded-[22px] border border-[#e9e6f0] bg-white p-5 shadow-[0_8px_28px_rgba(47,41,76,0.04)] sm:p-6"><div className="flex items-start justify-between"><div><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#9b96a9]">School updates</p><h2 className="mt-1 font-display text-[21px] font-bold tracking-[-0.04em] text-[#353048]">Notice board</h2></div><button onClick={() => onNavigate("notices")} className="flex items-center gap-1 text-[12px] font-bold text-[#7559e8]">View all <ArrowUpRight className="h-3.5 w-3.5" /></button></div><div className="mt-5 space-y-4">{notices.slice(0, 2).map((notice) => <button key={notice.title} onClick={() => onNavigate("notices")} className="group flex w-full gap-3 text-left"><div className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: notice.color }} /><div className="min-w-0"><p className="line-clamp-2 text-[12px] font-bold leading-5 text-[#514b63]">{notice.title}</p><p className="mt-1 text-[10px] text-[#aaa5b5]">{notice.date} · {notice.tag}</p></div></button>)}</div><div className="mt-6 rounded-[15px] bg-[#f8f6ff] p-3.5"><p className="flex items-center gap-2 text-[11px] font-bold text-[#6d5bc4]"><MessageCircle className="h-3.5 w-3.5" /> Have a question?</p><p className="mt-1 text-[11px] leading-5 text-[#938ba8]">Your teachers are one message away.</p></div></div></div></div>;
}

function Dashboard({ studentId, onLogout }: { studentId: string; onLogout: () => void }) {
  const [active, setActive] = useState<SectionKey>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const current = useMemo(() => navItems.find((item) => item.key === active) ?? navItems[0], [active]);
  const displayId = studentId.toUpperCase();
  const navigate = (key: SectionKey) => { setActive(key); setSidebarOpen(false); };
  const content = active === "overview" ? <Overview onNavigate={navigate} /> : active === "homework" ? <HomeworkView /> : active === "classwork" ? <ClassworkView /> : active === "performance" ? <PerformanceView /> : active === "holidays" ? <HolidaysView /> : <NoticesView />;

  return <div className="min-h-screen bg-[#f7f6fa] text-[#2c2940]"><div className={`fixed inset-0 z-30 bg-[#26223a]/35 backdrop-blur-[2px] transition-opacity lg:hidden ${sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setSidebarOpen(false)} /><aside className={`fixed bottom-0 left-0 top-0 z-40 flex w-[256px] flex-col border-r border-[#e8e4ef] bg-white px-4 py-5 shadow-[12px_0_40px_rgba(40,35,70,0.06)] transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} ${collapsed ? "lg:w-[84px]" : ""}`}><div className={`flex items-center px-2 ${collapsed ? "justify-center" : "justify-between"}`}><BrandMark compact={collapsed} />{!collapsed && <button onClick={() => setCollapsed(true)} className="hidden h-8 w-8 items-center justify-center rounded-lg text-[#aaa5b6] transition hover:bg-[#f5f2fa] hover:text-[#7559e8] lg:flex"><PanelLeftClose className="h-4 w-4" /></button>}<button onClick={() => setSidebarOpen(false)} className="flex h-8 w-8 items-center justify-center rounded-lg text-[#aaa5b6] lg:hidden"><X className="h-4 w-4" /></button></div>{collapsed && <button onClick={() => setCollapsed(false)} className="mt-7 hidden h-9 w-full items-center justify-center rounded-xl bg-[#f5f2fa] text-[#7559e8] lg:flex"><PanelLeftOpen className="h-4 w-4" /></button>}<div className={`mt-10 mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#b1adbb] ${collapsed ? "text-center" : ""}`}>{collapsed ? "•••" : "Workspace"}</div><nav className="space-y-1">{navItems.map((item) => { const Icon = item.icon; const selected = active === item.key; return <button key={item.key} onClick={() => navigate(item.key)} title={collapsed ? item.label : undefined} className={`group flex w-full items-center gap-3 rounded-[14px] px-3 py-3 text-left transition ${selected ? "bg-[#f0edff] text-[#7559e8]" : "text-[#8e899d] hover:bg-[#f8f6fb] hover:text-[#5f586f]"} ${collapsed ? "justify-center" : ""}`}><span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] ${selected ? "bg-[#e1dbff]" : "bg-transparent group-hover:bg-[#f0edf5]"}`}><Icon className="h-[17px] w-[17px]" strokeWidth={selected ? 2.4 : 1.9} /></span>{!collapsed && <span className="min-w-0 flex-1"><span className="block text-[12px] font-bold">{item.label}</span><span className={`mt-0.5 block truncate text-[10px] ${selected ? "text-[#9e91dd]" : "text-[#b0abb9]"}`}>{item.caption}</span></span>}{selected && !collapsed && <span className="h-1.5 w-1.5 rounded-full bg-[#7559e8]" />}</button>; })}</nav><div className="mt-auto">{!collapsed && <div className="mb-5 overflow-hidden rounded-[17px] bg-[#f7f4ff] p-4"><div className="flex items-center justify-between"><Sparkles className="h-4 w-4 text-[#7559e8]" /><span className="text-[10px] font-bold text-[#9a8bd7]">KEEP GOING</span></div><p className="mt-3 text-[12px] font-bold leading-5 text-[#5c537d]">You’re building a great study habit.</p><div className="mt-3 h-1 overflow-hidden rounded-full bg-[#e6defd]"><div className="h-full w-[72%] rounded-full bg-[#8b75eb]" /></div><p className="mt-2 text-[10px] text-[#9b91b6]">5 day streak</p></div>}<button onClick={onLogout} title={collapsed ? "Sign out" : undefined} className={`flex w-full items-center gap-3 rounded-[14px] px-3 py-3 text-left text-[#9d98aa] transition hover:bg-[#fff0ee] hover:text-[#c66560] ${collapsed ? "justify-center" : ""}`}><span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#f7f5f9]"><LogOut className="h-4 w-4" /></span>{!collapsed && <span className="text-[12px] font-bold">Sign out</span>}</button></div></aside><div className={`transition-[padding] duration-300 lg:pl-[256px] ${collapsed ? "lg:pl-[84px]" : ""}`}><header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-[#ebe8f1]/80 bg-[#f7f6fa]/90 px-5 backdrop-blur-xl sm:px-8"><div className="flex items-center gap-3"><button onClick={() => setSidebarOpen(true)} className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#716b82] shadow-sm lg:hidden"><Menu className="h-4 w-4" /></button><div><p className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-[#aaa5b5] sm:block">Student space</p><h2 className="font-display text-[17px] font-bold tracking-[-0.035em] text-[#403b53]">{current.label}</h2></div></div><div className="flex items-center gap-2 sm:gap-4"><button className="hidden h-9 items-center gap-2 rounded-xl border border-[#e7e3ed] bg-white px-3 text-[11px] font-semibold text-[#aaa5b5] shadow-sm md:flex"><Search className="h-3.5 w-3.5" /> Search</button><button className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-[#e7e3ed] bg-white text-[#8e899d] shadow-sm"><Bell className="h-4 w-4" /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#eb7a74] ring-2 ring-white" /></button><div className="hidden h-7 w-px bg-[#e6e2eb] sm:block" /><div className="flex items-center gap-2"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8e1ff] font-display text-[13px] font-bold text-[#7559e8]">AM</div><div className="hidden leading-tight sm:block"><p className="text-[12px] font-bold text-[#514b63]">Aarav Mehta</p><p className="mt-0.5 text-[10px] text-[#aaa5b5]">Grade 8 · Section B</p></div></div></div></header><main className="mx-auto max-w-[1320px] px-5 py-7 sm:px-8 sm:py-9">{content}</main></div></div>;
}

export default function Home() {
  const [studentId, setStudentId] = useState<string | null>(null);
  return studentId ? <Dashboard studentId={studentId} onLogout={() => setStudentId(null)} /> : <LoginScreen onLogin={setStudentId} />;
}
