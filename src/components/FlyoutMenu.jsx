import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, DropdownTrigger, Button, Dropdown, DropdownMenu, DropdownItem} from "@nextui-org/react";
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "@/components/Icons";


export default function App() {


  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />
  }

  return (
    <Navbar isBordered className="rounded-lg bg-gray-100">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle className="text-black" />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>

        <svg id="LogoSolo" height="52px" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1052 1052">
          <polygon className="cls-1" points="307.37 668.79 339.13 613.79 190.75 356.8 127.25 356.8 307.37 668.79"/>
          <polygon className="cls-1" points="373.85 640.2 342.1 695.2 709.9 695.2 678.15 640.2 373.85 640.2"/>
          <polygon className="cls-1" points="861.25 356.8 712.87 613.79 744.63 668.79 924.75 356.8 861.25 356.8"/>
          <polygon className="cls-1" points="645.32 496.79 677.08 551.79 789.66 356.8 726.15 356.8 645.32 496.79"/>
          <polygon className="cls-1" points="374.92 551.79 406.68 496.79 325.85 356.8 262.34 356.8 374.92 551.79"/>
          <polygon className="cls-1" points="409.65 578.2 642.35 578.2 610.6 523.2 441.4 523.2 409.65 578.2"/>
          <polygon className="cls-1" points="508.37 407.2 476.62 462.2 575.38 462.2 543.63 407.2 508.37 407.2"/>
          <polygon className="cls-1" points="441.9 435.79 473.65 380.79 459.8 356.8 396.29 356.8 441.9 435.79"/>
          <polygon className="cls-1" points="578.35 380.79 610.1 435.79 655.71 356.8 592.2 356.8 578.35 380.79"/>
        </svg>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
        <svg id="Logo" height="32px" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3400.76 558.98">
          <g>
            <g>
              <path className="cls-1" d="M1009.45,121.4h13.72l155.18,327.26h-83.4l-15.84-32.73h-125.1l-15.31,32.73h-83.4l154.13-327.26ZM1052.73,360.51l-36.42-80.23h-1.06l-36.95,80.23h74.42Z"/>
              <path className="cls-1" d="M1212.14,131.96h132.49c68.09,0,112.43,41.17,112.43,100.81,0,55.42-27.98,86.56-74.95,98.18l85.51,117.71h-97.12l-80.76-118.23v118.23h-77.59V131.96ZM1352.01,269.2c17.42,0,29.03-17.95,29.03-36.42s-13.72-34.84-31.14-34.84h-60.17v71.26h62.28Z"/>
              <path className="cls-1" d="M1495.06,131.96h209.55v68.62h-131.96v57.01h121.93v67.56h-121.93v57.01h137.76v66.51h-215.36V131.96Z"/>
              <path className="cls-1" d="M1921.54,121.4c99.76,0,170.49,74.42,170.49,168.91s-70.73,168.91-170.49,168.91-170.49-74.43-170.49-168.91,70.2-168.91,170.49-168.91ZM1921.54,385.85c55.95,0,91.84-42.23,91.84-95.54s-35.89-95.54-91.84-95.54-91.84,42.23-91.84,95.54,35.37,95.54,91.84,95.54Z"/>
              <path className="cls-1" d="M2145.87,131.96h132.49c64.92,0,102.93,48.03,102.93,101.34,0,59.12-44.34,101.34-102.93,101.34h-55.42v114.01h-77.06V131.96ZM2270.97,268.14c20.06,0,31.14-18.47,31.14-36.95,0-17.42-10.56-33.25-31.14-33.25h-48.03v70.2h48.03Z"/>
              <path className="cls-1" d="M2499.53,121.4h13.72l155.18,327.26h-83.4l-15.83-32.73h-125.1l-15.31,32.73h-83.4l154.13-327.26ZM2542.81,360.51l-36.42-80.23h-1.05l-36.95,80.23h74.42Z"/>
              <path className="cls-1" d="M2824.68,121.4c58.59,0,99.23,21.64,132.49,55.42l-53.84,49.62c-21.64-19.53-48.56-31.67-78.65-31.67-56.48,0-92.9,42.23-92.9,95.54,0,58.59,41.7,95.54,94.48,95.54,55.42,0,82.34-30.62,84.45-61.23h-90.26v-67.04h174.18v30.09c0,93.43-54.89,171.55-169.96,171.55-100.29,0-171.55-74.43-171.55-168.91s71.26-168.91,171.55-168.91Z"/>
              <path className="cls-1" d="M3218.97,121.4c99.76,0,170.49,74.42,170.49,168.91s-70.73,168.91-170.49,168.91-170.49-74.43-170.49-168.91,70.2-168.91,170.49-168.91ZM3218.97,385.85c55.95,0,91.84-42.23,91.84-95.54s-35.89-95.54-91.84-95.54-91.84,42.23-91.84,95.54,35.36,95.54,91.84,95.54Z"/>
            </g>
            <path className="cls-1" d="M2088.75,185.34v-61.17h-61.71c26.06,14.52,47.18,35.62,61.71,61.17Z"/>
          </g>
          <g>
            <polygon className="cls-1" points="195.13 430.76 226.88 375.76 78.51 118.76 15 118.76 195.13 430.76"/>
            <polygon className="cls-1" points="261.6 402.17 229.85 457.17 597.66 457.17 565.91 402.17 261.6 402.17"/>
            <polygon className="cls-1" points="749 118.76 600.63 375.76 632.38 430.76 812.51 118.76 749 118.76"/>
            <polygon className="cls-1" points="533.08 258.76 564.83 313.76 677.41 118.76 613.9 118.76 533.08 258.76"/>
            <polygon className="cls-1" points="262.68 313.76 294.43 258.76 213.61 118.76 150.1 118.76 262.68 313.76"/>
            <polygon className="cls-1" points="297.4 340.17 530.11 340.17 498.35 285.17 329.15 285.17 297.4 340.17"/>
            <polygon className="cls-1" points="396.13 169.17 364.37 224.17 463.14 224.17 431.38 169.17 396.13 169.17"/>
            <polygon className="cls-1" points="329.65 197.76 361.41 142.76 347.55 118.76 284.04 118.76 329.65 197.76"/>
            <polygon className="cls-1" points="466.1 142.76 497.86 197.76 543.46 118.76 479.96 118.76 466.1 142.76"/>
          </g>
        </svg>
        </NavbarBrand>
          <NavbarItem>
            <Link className="text-black px-2 py-2 text-md text-center font-semibold rounded-lg hover:bg-gray-100 hover:text-areo-lightblue focus:z-10 focus:ring-2 focus:ring-areo-lightblue focus:text-areo-lightblue" href="/">
              Inicio
            </Link>
          </NavbarItem>
          <Dropdown className="light">
          <NavbarItem >
            <DropdownTrigger >
              <Button
                disableRipple
                className="p-0 bg-transparent light data-[hover=true]:bg-transparent px-2 py-2 text-md text-center font-semibold  rounded-lg hover:bg-gray-100 hover:text-areo-lightblue focus:z-10 focus:ring-2 focus:ring-areo-lightblue focus:text-areo-lightblue"
                endContent={icons.chevron}
                radius="lg"
              >
                Retiros
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[250px] light"
            itemClasses={{
              base: "gap-5",
            }}
          >
            <DropdownItem
              key="23"
              description="Tandil, Buenos Aires, AR"
              startContent={icons.retiro23}
              href="/camp23"
            >
              <h3 className="text-lg font-base text-neutral-800 hover:text-neutral-900">2023</h3>
            </DropdownItem>
            <DropdownItem
              key="24"
              description="Tandil, Buenos Aires, AR"
              startContent={icons.retiro24}
              href="/camp24"
            >
              <h3 className="text-lg font-base text-neutral-800 hover:text-neutral-900">2024</h3>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

      </NavbarContent>


      <NavbarMenu className="h-screen w-screen top-0">
        <div className="mt-28 flex justify-center justify-items-center flex-col gap-4">
          <NavbarMenuItem>
            <Link
              className="w-full static justify-center text-3xl text-white font-bold my-4"
              href="/"
            >
              Inicio
            </Link>
          </NavbarMenuItem>

        <Dropdown className="dark">
          <NavbarItem >
            <DropdownTrigger >
              <Button
                disableRipple
                className="p-0 bg-transparent text-white data-[hover=true]:bg-transparent w-full static justify-center text-3xl text-white font-bold my-4"
                endContent={icons.chevron}
                radius="lg"
              >
                Retiros
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[250px] light"
            itemClasses={{
              base: "gap-5",
            }}
          >
            <DropdownItem
              key="23"
              description="Tandil, Buenos Aires, AR"
              startContent={icons.retiro23}
              href="/camp23"
            >
              <h3 className="text-lg font-base ">2023</h3>
            </DropdownItem>
            <DropdownItem
              key="24"
              description="Tandil, Buenos Aires, AR"
              startContent={icons.retiro24}
              href="/camp24"
            >
              <h3 className="text-lg font-base">2024</h3>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
