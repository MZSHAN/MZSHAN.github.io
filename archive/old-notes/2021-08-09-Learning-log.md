---
title: "Learning Log"
categories:
  - Learning
tags:
  - Daily
---

This post/page is a log of little things I learn on a daily basis

11th August 2021

Statically typed languages:
    For statically typed languages, the type has to be declared while writing the program. Thus the type is know at compile time.
This enables the compiler to generate optimized machine code for the type(less memory) and types don't have to be checked at run-time(faster program)

Dynamically Typed Languages:
    The variable is sort of like a pointer. The variable is bound to object at runtime. Same varible can bind to object of different types.
Dynamic Typic is slow. It helps in implementing other features though.

Strongly Typed Language:
    In evaluation of expressions, error occurs if different types are used, as variables are bound to specific data types. 
Example in Python: cannot add a string and integer

Weakly Typed language: 
    In evaluation of expression, error does not occur if incompatible types are used. 
Example in C: we can add a string to integer


Cython:
Python being dynamically typed, it is very slow - coz types of all the variables are checked at runtime(also GIL, etc.)
To circumvent this, Cython is used. 
Cython is a compiler which works on a language which is superset of Python (Python + additional functionality for C language speeding)
Cython takes in .pyx files - which are very similar to python plus type information and other changes and generates a shared library ".so" file from a .c file(which is also generated)
The shared library contains the python code "translated" to C. It provides the python API which can directly be used.

Interpretor: 
A program which emulates a computer. It coverts compiled code to machine code, thereby making the compiled code platform independent.  

Cython vs CPython:
Cython is a Python Interpretor. It takes python compiled code (.pyc files) and turns them into machine code
CPython is language which has Python as a subset. Cython compiler can compile both python and cython


Introspection: The ability to inspect the code at runtime and see object types 
Reflection: The ability to make modifications(dynamically call classes, methods, attributes, etc. ) at runtime using introspection without knowing the names at compile time
            It allows instantiation of new objects and invocation of methods


timeit:
Python package to accurate measure time taken for implementing a function by running it multiple times
timeit.timeit('''example_original.test(5)''',setup='import example_original', number=100)

References: 
Static vs Dynamic Typing: https://medium.com/android-news/magic-lies-here-statically-typed-vs-dynamically-typed-languages-d151c7f95e2b
Cython: https://www.youtube.com/watch?v=mXuEoqK4bEc&t=25s
Reflection and Introspection in Python : https://betterprogramming.pub/python-reflection-and-introspection-97b348be54d8
Very GOOD: Python Interpretor: https://www.aosabook.org/en/500L/a-python-interpreter-written-in-python.html
Python Interpreter makes .pyc files platform independent(for a given python version): https://stackoverflow.com/questions/30443490/is-pyc-platform-independent
#https://hackernoon.com/i-finally-understand-static-vs-dynamic-typing-and-you-will-too-ad0c2bd0acc7


14th August 2021


User Space and Kernel Space (tags: OS/Memory/Systems):

Pre-Note: What does it mean for a program to be executing? Program counter points to the memory adress in Text(Code) part of program. The instruction from this address is executed by the CPU. https://www.hackerearth.com/practice/notes/memory-layout-of-c-program/ 
From wiki, https://en.wikipedia.org/wiki/Program_counter, In a simple central processing unit (CPU), the PC is a digital counter (which is the origin of the term "program counter") that may be one of several hardware registers. So basically at the architecture level, CPU just reads a register, fetches the address from there and executes. It has no idea of memory spaces.

Memory gets divided into two parts. Use space and Kernel space. 

Kernel space is the part of memory allocated for Kernel use. This is the part where the kernel code resides, where the kernel allocates stack heap, etc (Linux kernel is a C program, so it will follow the structure of a C program)

User space is the part of memory allocated for user programs. Kernal has access to the user space. This means that kernal code can directly called user code to be executed(set intruction register to address in user space) but code executing in user space can not call code in kernel space directly. To call code in kernel space(say io, etc.), user code uses system calls. System calls is the interface exposed by the kernel for user processes. The system calls raise interrupts which transfer
control to interrupt handlers in the kernel and continues execution later. https://unix.stackexchange.com/questions/87625/what-is-difference-between-user-space-and-kernel-space

Question: If kernel can't get back control when a user process is running, how does it schedule other process? Kernel sets a timer when it tranfers execution to a user process. When the timer goes off, the interrupt handler transfers execution back to the kernel.
https://stackoverflow.com/questions/2250391/who-schedules-the-scheduler-in-os-isnt-it-a-chicken-and-egg-scenario

Connecting user and kernel space to virtual memory and user programs execution:

When a physical memory is allocated into kernel space and user space, the higher addresses are reserved for the kernel and lower addresses are used for the user processes. https://unix.stackexchange.com/questions/4929/what-are-high-memory-and-low-memory-on-linux/5151#5151
How virtual memory ties into this: Each user process "feels" that it has the entire user space for itself. This is possible due to virtual memory. So for every executing process, it' memory view is  http://www.it.uu.se/education/course/homepage/os/vt18/module-0/mips-and-mars/mips-memory-layout/ 
Note: even if the process can view the kernel memory it has no means of executing the kernel code.
( My hunch - 
1. This would be ensured by the compiler. It would restrict program counter manipulation to be restricted to the text area. The binary develped by the compiler contains only the text and datasection. PC register can load address of only the text region - it can not even execute the stack or heap ideally, let alone the kernel. I am not sure how this is implemented. 

2. It could also be somehow ensured that kernel code can only only be called from other kernel code or through interrupt handlers which are triggered from the user space)

Sidenote: 
How a kernel starts a user process. 
My guess - Fork to create child process. Run exec with user binary. Exec replaces current the current execution to binary. Somehow change the mode to uer mode

Doubt: 
How and where is the Virtual File System Managed?
virtual file system: Does Kernel program page out memory from user process.

Ref:
Good explanation of Linux Kernel Architecuture:https://developer.ibm.com/articles/l-linux-kernel/
good illustration of thread and process memory space:  http://www.it.uu.se/education/course/homepage/os/vt18/module-4/definitions/


23rd Aug 2021

Linux groups
- Why do they exist
- What are they useful for?


Packer 
- why is it used?
- advantages?

Upstart Event system
- advantages

How upstart and packer can be used together

24th Aug 2021

Packer is used to create Machine Images which is basically an Operating System which can then be deployed on multiple Nodes
Packer can create the same machine image for different platforms - thus facilitating platform independence required for cloud computing.
Machine Image : pre-configured OS with pre-installed software

So packer is used to build machine images. Now what if we want to configure the machine image on booting(to facilite further operations in a specific way)
Packer has provisioners for that. Eg. File provisioners are used for uploading files on booting and shell provisioners are used to run shell scripts on booting.
IMP NOTE: File provisioners can only upload files to locations which the provisioning user(not root) has permissions. This means that file provisioner keeps the file in /tmp and shell provisioner is used to run shell scripts to move files to root accessible locations.


Upstart:
When an ubuntu system loads, the init process(part of System V init tools) is responsible for running services(daemons) for other tasks - registering file systems, setup networks, etc.
The init process has limitations. eg. if an additional storage device is connected to the computer, then system will have to restarted for it to be recognized. 
    This led to the Upstart system. It is based on events and not a preset to-do list as init does. Upstart can start/stop daemons asynchronously. 
    https://www.digitalocean.com/community/tutorials/the-upstart-event-system-what-it-is-and-how-to-use-it

Difference between /etc/init and /etc/init.d:
    /etc/init.d contains shell scripts used by SysVinit(init process) to start, step, reload, etc. a process. /etc/init is used by Upstart - it has upstart configuration files
    https://askubuntu.com/questions/5039/what-is-the-difference-between-etc-init-and-etc-init-d
    











Next notes:
FUSE - File System in User Space
vgextend and lvextend(physical and logical filessytems)
mkfs.()ext/btfs) and mount
symbolic linking - explain in detail(maybe also write how files are organized in the linux file system)
markup languages - beautifying
Cuda Programming model - https://docs.nvidia.com/cuda/cuda-c-programming-guide/
gdb and valgrind. /proc/pid/maps and mlocate for debugging
Different docker containers share drivers
