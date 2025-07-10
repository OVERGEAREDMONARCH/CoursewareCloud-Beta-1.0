
import { 
  Home, 
  Book, 
  Users, 
  ClipboardList, 
  BarChart3,
  Calendar, 
  MessageCircle, 
  Settings,
  GraduationCap
} from 'lucide-react'
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "../../../components/ui/sidebar"

const items = [
  { title: "Dashboard", url: "/lecturer", icon: Home },
  { title: "My Courses", url: "/lecturer/courses", icon: Book },
  { title: "Students", url: "/lecturer/students", icon: Users },
  { title: "Assignments", url: "/lecturer/assignments", icon: ClipboardList },
  { title: "Analytics", url: "/lecturer/analytics", icon: BarChart3 },
  { title: "Schedule", url: "/lecturer/schedule", icon: Calendar },
  { title: "Messages", url: "/lecturer/messages", icon: MessageCircle },
  { title: "Settings", url: "/lecturer/settings", icon: Settings },
]

export function LecturerAppSidebar() {
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path

  return (
    <Sidebar className="bg-purple-800 text-white">
      <SidebarHeader>
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <GraduationCap className="text-purple-800" size={20} />
          </div>
          <span className="font-semibold text-lg text-white">Lecturer Portal</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-purple-200">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)} className="text-white hover:bg-purple-700 data-[active=true]:bg-purple-600">
                    <NavLink to={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-purple-800 text-sm font-semibold">DJ</span>
          </div>
          <div>
            <p className="text-sm font-medium text-white">Dr. Johnson</p>
            <p className="text-xs text-purple-300">Computer Science</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
