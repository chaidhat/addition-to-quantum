# Going from 1+1=2 to Understanding Quantum Mechanics

![image.png](Going%20from%201+1=2%20to%20Understanding%20Quantum%20Mechanic/image.png)

Hi, my name is Chai and I’m taking a quantum mechanics course at UCLA.

Some people call it the [hardest class at UCLA.](https://www.reddit.com/r/ucla/comments/1lhbq9z/ece_128_hardest_class_at_ucla/?solution=3da9f63c92aa67393da9f63c92aa6739&js_challenge=1&token=bbbe4bf1c9a2b5160829c4be34da5861cc4e9d1393fcae709571ec8f7afb7cec)

I wanted to write a series on quantum mechanics starting from basic addition and going to bachelor-degree level quantum mechanics. So, at the start, you only need to know how to add and multiply numbers and in the end, you’ll know how to do quantum mechanics problems.

This is based on the Electrical and Computer Engineering 128 course taught at the University of California, Los Angeles by Dr. Leo Zhou. 

License: CC0 No rights reserved

<aside>
💡

# None of this is written by AI

None of this is written by AI — I am writing this by hand because I find explaining concepts makes me understand them better too.

# Everything must be defined previously

Any mathematical term MUST be derived from first principles (or like elementary school math). I tried including a lot of hyperlinks but if anything doesn’t reference, let me know. 

Example

[T-invariant subspaces](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) → [subspaces](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) → [subsets](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) → [set theory](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21)

</aside>

<aside>
💡

# chaimongkol@ucla.edu

Please let me know at [chaimongkol@ucla.edu](mailto:chaimongkol@ucla.edu) on how I’m doing or that you’ve even read this message. If I see support, it makes me want to continue this series! The series is currently incomplete.

</aside>

# Table of Contents

# Lecture 1: Building Blocks

## Blorple

Ok when I say “let” i’m just defining something to be another thing.

Example:

$$
\text{Let blorple be blue}
$$

Now if i say “the sky is blorple” then i actually mean that it is blue.

![image.png](Going%20from%201+1=2%20to%20Understanding%20Quantum%20Mechanic/image%201.png)

## Variables, addition

Let a variable be just a symbol that represents a literal thing. 

I can define what number it represents by saying “it’s equal to this”

Example:

Let

$$
x=1
$$

Now if I add something to that variable, I’m going to write a double arrow “$\Rarr$” on the left of it to show that “Therefore this is true” 

Example:

$$
x=1\\
\Rarr x+1=1+1\\
\Rarr x+1=2
$$

<aside>
💡

$\Rarr x+5=6$, as $x=1$, we’d just put 1 in place of the $x$

</aside>

## Multiplication

Math people are cool and they don’t have time to write $\times$. Sometimes when I multiply numbers or [variables](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) together, i’m going to write them touching each other or with a $\cdot$ in the middle. Because I’m cool too.

$$
5\times x\quad\text{is the same idea as}\quad 5x\quad\text{is the same idea as}\quad5\cdot x
$$

## Matrices

Let a “matrix” ****be a set of numbers ordered in a neat grid. Now we can manipulate a lot of numbers simultaneously. Interestingly enough, they are the solution to a lot of real world including machine learning and quantum mechanics. 

Let’s make a new [variable](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) called $A$.

Let $A$ be a matrix of size $m\times n$ where $m$ is the height of the matrix (how many rows it has) and $n$ is the width (how many columns it has). 

Example:

$$
A=\begin{pmatrix}
1 & 2 & 5\\
3 & 4 & 9
\end{pmatrix}
$$

<aside>
💡

See how $A$ is also a variable? In this case, $m=2, n=3$ as there are 2 rows and 3 columns.

</aside>

We use matrices to represent sets of numbers because they have an equivalent in the real world. In this case, quantum states. 

## Ket (States)

Let $\ket{x}$ (ket x) be a $N \times 1$ matrix where $N$ is any positive integer (number with no decimals and is greater than 0).

Just like how $x$ was a variable used to represent ONE number, $\ket{x}$ can be used to represent any $N\times 1$ matrix.

Example:

$$
\ket{x}=\begin{pmatrix}
1\\
2\\
7
\end{pmatrix}\quad \ket{\psi}=\begin{pmatrix}
9\\
9\\
0\\
0\\
0
\end{pmatrix}\quad\ket{\phi}=\begin{pmatrix}
0\\
1
\end{pmatrix}
$$

 

<aside>
💡

Note that $\psi$ (psi) is pronounced sye and $\phi$ (phi) is pronounced fye. They are just like $x$ but idk why quantum physicists love greek characters.

</aside>

## Photons, Wave-particle Duality

Let this be a photon. It’s like a particle of light.

![image.png](Going%20from%201+1=2%20to%20Understanding%20Quantum%20Mechanic/image.png)

People, like Newton, favored the idea that light was a particle. This was until Young, a person, performed an experiment called the double slit experiment which showed light interacting like a wave. Maxwell, another person, proved that it was a wave — one that interfered with the electric and magnetic fields. Einstein, another person, said nuh-uh and disproved this by explaining the photoelectric effect, giving evidence light is a particle AND a wave.

Present day, the majority of people concur that light is a wave and particle simultaneously.

This means that photons can have a “state.” These can be represented as kets!

Sometimes we observe photons having a “spin” — it’s not really spinning but physicists are weird and say particles also have colors. Obviously they are not colored because they are smaller than light.

## Superpositions, matrix addition

A photon can have a probability of $x\%$ of spinning up (+). This means it would have $(100-x)\%$ of spinning down (-), since the probabilities must add up. The photon actually is both spinning up and spinning down until we observe it, where it collapses to either spinning up or spinning down. Schröndinger’s cat.

![image.png](Going%20from%201+1=2%20to%20Understanding%20Quantum%20Mechanic/image%202.png)

We call this position of spinning both up and down simultaneously a “superposition.”

Let’s just say $\ket{+}$ is the state of spinning up and $\ket{-}$ is the state of spinning down.

Let a “state” just be a $N\times 1$ matrix like what we just said above. So $\ket{x},\ket{\psi},\ket{\phi}$ are all states.

Some states can be made of other states.

Example:

Let

$$
\ket{x}=\begin{pmatrix}
1\\
0
\end{pmatrix}\quad
\ket{y}=\begin{pmatrix}
0\\
1
\end{pmatrix}
$$

![image.png](Going%20from%201+1=2%20to%20Understanding%20Quantum%20Mechanic/image%203.png)

If i multiply a matrix by a number (let this be called a “scalar”), we apply the multiplication across all values.

$$
\Rarr 3\ket{x}=3\begin{pmatrix}1\\0\end{pmatrix}=\begin{pmatrix}3\times1\\3\times0\end{pmatrix}=\begin{pmatrix}3\\ 0\end{pmatrix}
$$

![image.png](Going%20from%201+1=2%20to%20Understanding%20Quantum%20Mechanic/image%204.png)

If we add $\ket{x}+3\ket{y}$ we get

$$
\Rarr\ket{x}+3\ket{y}=\begin{pmatrix}
1\\
0
\end{pmatrix}+3
\begin{pmatrix}
0\\
1
\end{pmatrix}
=\begin{pmatrix}
1\\
3
\end{pmatrix}
$$

![image.png](Going%20from%201+1=2%20to%20Understanding%20Quantum%20Mechanic/image%205.png)

Notice how we’re adding the $n$-th elements of the states together for each row?

We can represent these two states coexisting (i.e., a superposition) using math now!

$$
\ket{\psi}=\alpha\ket{+}+\beta\ket{-}
$$

where $\alpha,\beta$ are just numbers. See how they are a combination of up and down states?

There is $|\alpha|^2$ probabilty that the photon, once observed, spins upwards and $|\beta|^2$ probability it spins downwards once observed.

<aside>
💡

$|a|$ is just a way of saying make $a$ positive if it is negative.

Example:

$$
|(-3)|=3\\
|5|=5
$$

</aside>

Note that

$$
|\alpha|^2+|\beta|^2=1
$$

as you can’t have more than 100% or less than 0% probability of something existing.

# Lecture 2

I’m going to write a ton of mathematical definitions which will build up how to do the physics in the next section!

## Linear Independence

Let “linearly independent states” be states that you cannot create another linearly independent state from multiplying and adding another linearly independent state.

a cleaner definition is $\ket{\psi_1},\ket{\psi_2},…\ket{\psi_n}$ are linearly independent if the only way to get

$$
c_1\ket{\psi_1}+c_2\ket{\psi_2}+\cdots+c_n\ket{\psi_n}=0
$$

is having $c_i=0$ for all ($\forall$) $c_i$.

Example:

Given $c$ is just a regular number,

$$
\ket{+}=c\ket{-}\quad\text{will never happen how much you try}
$$

and vice versa.

## Basis States

If a set of states are BOTH

- [linearly independent](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21)
- span the whole space (i.e., every state in the space can be written as a linear combination of these things)

then they are called basis states.

Note that $\ket{+},\ket{-}$ from the previous lecture are “basis” states

## Inner product

Inner product of states $\ket{u}$ and $v$ is defined as

$$
\ket{u}\cdot \ket{v}=u_1v_1+u_2v_2+...+u_nv_n
$$

## Orthogonality

State $\ket{u},\ket{v}$ are orthogonal to each other if the [inner product](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) of state $\ket{u}$ and $\ket{v}$ are zero.

$$
\ket{u}\cdot \ket{v}=0
$$

They’re also known as being perpendicular!

![image.png](Going%20from%201+1=2%20to%20Understanding%20Quantum%20Mechanic/image%206.png)

## Magnitude

Where $n$ is the dimensions, the magnitude of $\ket{\psi}$ is defined as:

$$
||\ket{\psi}||=||\begin{pmatrix}\psi_1\\\psi_2\\\vdots\\\psi_n\end{pmatrix}||=\sqrt{\psi_1^2+\psi_2^2+...+\psi_n^2}
$$

## Normal

$\ket{\psi}$ is normal if it has [magnitude](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) 1

$$
||\ket{\psi}||=1
$$

## Orthonormality

Let “ $\ket{+},\ket{-}$ are orthonormal” mean both $\ket{+},\ket{-}$ are both [orthogonal](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) and [normal](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21).

## Complex Numbers

Math is complicated. Some can say it’s complex.

Numbers can be complex.

Let’s say we have two funny looking 2x2 matrices. Just bear with me.

$$
M_R=\begin{pmatrix}1 & 0\\
0 & 1
\end{pmatrix}\quad
M_I=\begin{pmatrix}0 & -1\\
1 & 0
\end{pmatrix}
$$

Now we can put two scalars $a,b$ infront of these numbers and add it up like we did before:

$$
z=a\begin{pmatrix}1 & 0\\
0 & 1
\end{pmatrix}+b\begin{pmatrix}0 & -1\\
1 & 0
\end{pmatrix}\\
\Rarr z=\begin{pmatrix}a & -b\\
b & a
\end{pmatrix}
$$

We can write this weird looking matrix differently:

$$
z=a+bi
$$

What is $i$? Well, we don’t know. It’s not a variable! But we know what $i^2$ is:

$$
i^2=-1
$$

Notice however much you can times $a$, it won’t affect $b$, and vice versa, this means they are basis states like what we learned last lecture! 

### Conjugate

Let the conjugate of $z$ be written as $z^*$ and mean this (we just make b negative)

$$
z^*=a-bi=\begin{pmatrix}a & +b\\
-b & a
\end{pmatrix}
$$

### Euler Form

Taylor, a person, once said that

$$
e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}+...\\
\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\cdots\\
\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\cdots
$$

so Euler, another person, said

$$
e^{i\theta}=1+i\theta+\frac{(i\theta)^2}{2!}+\frac{(i\theta)^3}{3!}+\cdots\\
=1+i\theta-\frac{\theta^2}{2!}-i\frac{\theta^3}{3!}+\frac{\theta^4}{4!}+i\frac{\theta^5}{5!}
$$

If we rearrange the terms we get

$$
e^{i\theta}=\left(1-\frac{\theta^2}{2!}+\frac{\theta^4}{4!}-\cdots\right)+i\left(\theta -\frac{\theta^3}{3!}+\frac{\theta^5}{5!}+\cdots\right)\\
=\cos\theta+i\sin\theta

$$

This means we can represent complex numbers in this weird form too:

$$
z=re^{i\theta}
$$

![image.png](Going%20from%201+1=2%20to%20Understanding%20Quantum%20Mechanic/image%207.png)

## Bra/Transpose

We just learned what ket $\ket{x}$ means — a $N\times 1$ vector. Let that ALSO be called a ket. If we flip it horizontally, we get a bra $\bra{x}$.

If a ket is

$$
\ket{x}=\begin{pmatrix}
1+3i\\
2+5i\\
7
\end{pmatrix}\quad \ket{\psi}=\begin{pmatrix}
9\\
9\\
0\\
0\\
0
\end{pmatrix}\quad\ket{\phi}=\begin{pmatrix}
0\\
1
\end{pmatrix}
$$

Then it’s counterpart is a bra

$$
\bra{x}=\begin{pmatrix}
1-3i&
2-5i&
7
\end{pmatrix}\quad \bra{\psi}=\begin{pmatrix}
9&
9&
0&
0&
0
\end{pmatrix}\quad\bra{\phi}=\begin{pmatrix}
0&
1
\end{pmatrix}
$$

You swap the columns for the rows (transpose!) and make every element the conjugate of itself. It becomes a $1\times N$ matrix instead.

Let this weird transformation be known as a conjugate transpose, denoted as

$$
\bra{v}=(\ket{v})^+
$$

### Hermitian Matrix

Let a “Hermitian matrix” be a matrix that equals its own conjugate transpose

If and only if $A$ is a matrix and is Hermitian, then this is true

$$
A=A^+
$$

This means a bra and ket are Hermitian matrices of each other!

Another example:

$$
\ket{\psi}=\begin{bmatrix}a\\b\end{bmatrix}\quad \ket{\phi}=\begin{bmatrix}c\\d\end{bmatrix}\Rarr \bra{\phi}=\begin{bmatrix}c^* & d^*\end{bmatrix}
$$

## Bra-ket, matrix multiplication

Now let this be a bra-ket (get it?)

$$
\braket{\phi|\psi}=\bra{\phi}\ket{\psi}=\begin{bmatrix}c^* & d^*\end{bmatrix}\begin{bmatrix}a\\b\end{bmatrix}\quad 
$$

This means we’re multiplying these two matrices $\begin{bmatrix}c^* & d^*\end{bmatrix},\begin{bmatrix}a\\b\end{bmatrix}$ together.

The way we multiply matrices is by performing this algorithm. 

Let there be two matrices, $A,B$ with size $m\times n$ and $n\times p$ respectively. We get a matrix $C=AB$ which is size $m\times p$.

for an element on row $i$, column $j$ in $C$ we let this be called $C_{ij}$

$$
C_{ij}=\sum_{k=1}^nA_{ik}B_{kj}
$$

so

$$
\braket{\phi|\psi}\\=\bra{\phi}\ket{\psi}\\=\begin{pmatrix}c^* & d^*\end{pmatrix}\begin{pmatrix}a\\b\end{pmatrix}\\=\begin{pmatrix}
c^*a+d^*b\end{pmatrix}\\=c^*a+d^*b
$$

It is a 1x1 matrix which can be simplified to a scalar value.

Note that

$$
\braket{x+|x+}=\braket{x-|x-}=1\\
\braket{x+|x-}=\braket{x-|x+}=0
$$

Where $x+,x-$ are orthonormal to each other. Another way we can say this is $\{\ket{x+},\ket{x-}\}$ forms an orthonormal basis.

Let this be the notation of if/else

$$
x=\begin{cases}1\quad\text{if true}\\0\quad\text{if false}\end{cases}
$$

a set of vectors $\{v_1,v_2,...,v_n\}$ form an orthonormal basis if and only if

$$
\braket{v_i|v_j}=\delta_{ij}=\begin{cases}1\quad j=k\\0\quad j\neq k\end{cases}
$$

### Square Matrix

a square matrix is a matrix with the same number of rows and columns (i.e., an $N\times N$ matrix)

### Symmetric Matrix

A matrix $X$ where

$$
X=X^TX
$$

(note that $X^T$ means [transpose](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21))

### Kronecker Delta

Where $\delta_{ij}$ is just something we define as that. It is called the Kronecker delta.

## Vector Spaces

Let a vector space $V$ be a set of vectors with

- addition such that

$$
\ket{u}+\ket{v}\in V\quad ;\quad\ket{u},\ket{v}\in V
$$

- scalar multiplication such that

$$
a\ket{v}\in V\quad ;\quad a\in \mathbb{F},\ket{v}\in V
$$

# Lecture 3

This lecture will apply the math learned in the previous lecture to do some cool physics!

## Planck-Einstein Relation

Einstein, a person, showed experimentally that

$$
E=hf
$$

which means energy of a photon is a constant (Planck’s! Another person) $h=6.626\times 10^{-34}Js$ times the frequency of the light $f$. Because it was experimental, we can’t really prove with math that this is true, but we proved it with experiments.

## Angular Momentum, reduced Planck constant

Some dude in physics was like let’s make a new, transformed version of frequency called angular momentum $\omega$!

Let

$$
\omega=2\pi f
$$

Because of this, we can say that

$$
E=hf\\
=h\frac{\omega}{2\pi}
$$

Let the reduced Planck constant be

$$
\hbar=\frac{h}{2\pi}
$$

so we can also say

$$
E=\hbar \omega
$$

Bohr, a person, hypothesized that atoms absorb light at discrete frequencies.

This means that atoms (photons too) have discrete (non-continuous) energy levels.

## Functions

Also let us notate a state as a function of time. What’s a function?

Example:

if i let $f$ be a function that accepts $x$ as an argument, like this

$$
f(x)=4x
$$

then

$$
f(5)=4(5)=20
$$

We can say that state is a function of time $t$

Example:

$$
\ket{\psi(t)}
$$

## Particle Energies

We just said photons have discrete energy levels. Let’s say they have $k$ energy levels. 

We know experimentally, that any state $\ket{\psi(t)}$ (e.g., spin) of a quantum particle can be expanded in the energy basis. Let the energy basis be just a set of basis states $E_1,E_2, …, E_k$. This means a photon can be at those energies. 

A state is a superposition of all those energies. Recall that a super position is just a sum ($\sum$) of those energies. I put $k$ under the sum showing we must add all the energies and their corresponding $c_k$ values (aka. coefficients) together.

$$
\ket{\psi(0)}=\sum_kc_k\ket{E_k}
$$

## Particle Phases

We also just proved that $E=\hbar\omega$ so that particle with energy $\ket{E_k}$ will oscillate at frequency 

$$
\omega_k=\frac{E_k}{\hbar}
$$

Oscillating means the phase of the particle changes so we can represent the phase as a complex number.

Let’s say there is a two-level quantum system in some superposition. This just means

$$
\ket{\psi}=\alpha\ket{0}+\beta\ket{1}=\begin{pmatrix} \alpha\\\beta\end{pmatrix}
$$

Because $\alpha,\beta$ can be complex, we proved experimentally that a glass polarizer, like a polarized sunglass, can change the phase of the state $\ket{1}$ for example.

Let

$$
\beta'=\beta e^{i\delta}
$$

Where $\delta$ can be any phase angle from 0 to $2\pi$.

This is the same phase as which destructively interfere in the double slit experiment. That’s why phases exist. Because light is a wave with a frequency (and also a particle!)

## Calculus

To differentiate something means to see how fast it changes with respect to something else changing, for example, time.

$$
\frac{d}{dt}x=\text{change of $x$ w.r.t. $t$}
$$

To do this, us humans developed some nifty tricks. To different something to the power of something, we multiply by the power and decrease the power by 1

$$
\frac{d}{dt}x^5=5x^4
$$

The opposite of differentiation is integration.

$$
\int_\alpha^\beta x\cdot dt=\text{the sum of x from t=$\alpha$ to t=$\beta$}
$$

Integration is much more hellish. You don’t need to know integration for this.

## Schrödinger’s Equation, Hamiltonian

Recall

$$
\ket{\psi(0)}=\sum_kc_k\ket{E_k}
$$

Because we learned this thing called phase, we can say that particle oscillate at different phases. This is shown using phases

$$
\ket{\psi(t)}=\sum_kc_ke^{-i\omega_kt}\ket{E_k}\\
=\sum_kc_ke^{-iE_kt/\hbar}\ket{E_k}\\
$$

If we take the derivative from both sides

$$
\frac{d}{dt}\ket{\psi(t)}=\frac{d}{dt}\left[\sum_kc_ke^{-iE_kt/\hbar}\ket{E_k}\right]\\
=\sum_kc_k\cdot \left(-i\frac{E_k}{\hbar}\right)e^{-iE_kt/\hbar}\ket{E_k}\\
=-\frac{i}{\hbar}\sum_kc_k\cdot E_ke^{-iE_kt/\hbar}\ket{E_k}
$$

Let the Hamiltonian $H$ be the state multiplied by its energy

$$
H\ket{E_k}=E_k\ket{E_k}
$$

so

$$
=-H\frac{i}{\hbar}\sum_kc_k\cdot e^{-iE_kt/\hbar}\ket{E_k}\\
=-\frac{i}{\hbar}H\ket{\psi(t)}
$$

which gives us Schrödinger’s equation (in state-vector form)

$$
i\hbar\frac{d}{dt}\ket{\psi(t)}=H\ket{\psi(t)}
$$

# Lec 4

This lecture introduces more intricate details to defining quantum mechanics

## Hilbert Space

A Hilbert space $H$ describes quantum space.

$$
H
$$

A Hilbert space is a vector space, possibly infinite-dimensional.

$H$ has an inner product and is complete.

The states we wrote before for example $\ket{\psi}$ are vectors which exist in a Hilbert space.

### Vectors

Let vector just be the same thing as [states](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21).

### Inner Product II

building on top of what we said about the inner product,

an inner product is any 

$$
\langle u|v\rangle
$$

which is

1. conjugate symmetric

$$
\braket{u|v}^*=\braket{v|u}

$$

Example

let

$$
\ket{\psi}=\begin{bmatrix}a\\b\end{bmatrix}\quad \Rarr \bra{\psi}=\begin{bmatrix}a^* & b^*\end{bmatrix}

\\
\ket{\phi}=\begin{bmatrix}c\\d\end{bmatrix}\Rarr \bra{\phi}=\begin{bmatrix}c^* & d^*\end{bmatrix}
$$

so

$$
(\braket{\psi|\phi})^*=\left(\begin{bmatrix}a^* & b^*\end{bmatrix}\begin{bmatrix}c\\d\end{bmatrix}\right)=(a^*c+bd^*)^*=ac^*+bd^*=c^*a+d^*b\\
=\braket{\phi|\psi}
$$

so $\phi,\psi$ are conjugate symmetric

1. linear

$$
\langle u|(a|v\rangle + b|w\rangle) = a\langle u|v\rangle + b\langle u|w\rangle
$$

1. positive definite

$$
\forall |u\rangle \neq 0, \quad \langle u|u\rangle > 0
$$

### Completeness

Don’t worry about it. -prof. Zhou

## Projections

The projection of $v$ onto a [vector](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) $u$ is

$$
\Pi_u(v)=\frac{\braket{v|u}}{\braket{u|u}}u
$$

Example

$$
\ket{\psi}=\begin{bmatrix}a\\b\end{bmatrix}\quad \Rarr \bra{\psi}=\begin{bmatrix}a^* & b^*\end{bmatrix}

\\
\ket{\phi}=\begin{bmatrix}c\\d\end{bmatrix}\Rarr \bra{\phi}=\begin{bmatrix}c^* & d^*\end{bmatrix}
$$

$$
\Pi_\psi(\phi)=\frac{\begin{bmatrix}c^* & d^*\end{bmatrix}\begin{bmatrix}a\\b\end{bmatrix}}{\begin{bmatrix}a^* & b^*\end{bmatrix}\begin{bmatrix}a\\b\end{bmatrix}}\begin{bmatrix}a\\b\end{bmatrix}\\
=\frac{c^*a+d^*b}{a^*a+b^*b}\begin{bmatrix}a\\b\end{bmatrix}
$$

This is similar to the dot product, but it gives a [vector](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21)

Projections are [operators](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) with a special property

$$
\Pi^2=\Pi
$$

## Gram-Schmidt Procedure

If you have [linearly independent](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) vectors and want to convert them into an [orthonormal](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) set, you can follow the Gram-Schmidt procedure.

Given $v_1,v_2,…,v_n$ as [LI](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) [vectors](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21), then $u_1, u_2, …, u_n$ can be built using

$$
u_k=v_k-\sum_{i=1}^{k-1}\Pi_{u_i}(v_k)
$$

This makes $u$ an [orthogonal](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) [vector](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21)

Then you [normalize](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) $u$ to get a [orthonormal](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) [vector](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21). You do this by multiplying the [magnitude](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) of the [vector](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21).

## Set Theory

Ok this is just for notation sake but i want to make my life a bit easier.

### Element

an element is either a variable or a number or a literal in our definition

$$
1,5,a,\text{cat},...
$$

### Set

Let a set be an unordered collection of [elements](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21)

Example:

This is a set $S$

$$
S=\{3,5,1982549\}\\
S_2=\{2n\quad|\quad n=1,2,5\}=\{2,4,10\}
$$

The | means “such that”

### Subsets

[sets](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) can be subsets (or equal) of another set if all elements of a [set](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) is in another [set](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21).

Example:

$$
S\subset\{3,5,1982549,67\}
$$

We have a line underneath to show it could be a subset OR equal

$$
S\subseteq\{3,5,1982549\}
$$

### In

We can say an [element](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) is “in” a [set](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) if it’s in a set (duh)

Example:

$$
3\in S\\
4\notin S
$$

### Standard Number Systems

There are some standard number systems we gotta keep in mind

$$
\{1,2,3,...\}\subseteq\mathbb{N}\\
\{...,-3,-2,-1,0,1,2,3,...\}\subseteq\mathbb{Z}\\
\{\frac{p}{q}\quad\forall p\in \mathbb{Z},q\neq 0 \}\subseteq\mathbb{Q}\\
\{\sqrt{2},\pi,...\}\in \mathbb{R}\\
\{3+1i, 5+5i, 2+0i\}\in\mathbb{C}=\mathbb{F}
$$

Where 

- $\mathbb{N}$ are natural numbers
- $\mathbb{Z}$ are integers
- $\mathbb{R}$ are real numbers
- $\mathbb{C}$ are complex numbers, $\mathbb{F}$ are fields

where $\forall p\in \mathbb{Z},q\neq 0$ means for all integers $p$ AND $q\neq 0$

## Functions

A function $f$ is maps numbers from a set $A$ to set $B$. It’s written like this

$$
f:A\rarr B
$$

A map just links a thing to another thing. 

Example

Let $q$ be a function

$$
q:\Z\rarr\Z\\
q(x)=3x
$$

q essentially maps all integers to another integer, which is three times itself.

$$
q(67)=201
$$

## Operators

Let $\hat{T}$ be an operator.

An operator is a [function](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) where

$$
\hat{T}:V\rarr V
$$

where V are the set of all possible vectors in a Hilbert space.

Then

$$
\hat{T}(a\ket{u}+b\ket{v})=a\hat{T}(\ket{u})+b\hat{T}(\ket{v})
$$

also they can be represented as matrices

$$
\hat{T}\ket{\psi}=\sum_{m}\psi_m'\ket{m}
$$

where

$$
\begin{bmatrix}
\psi_1'\\
\psi_2'\\
\vdots\\
\psi_d'
\end{bmatrix}=
\begin{bmatrix}

T_{11} & T_{12} & \cdots & T_{1d}\\
T_{21} & T_{22} & \cdots & T_{2d}\\
\vdots\\
T_{d1} & T_{d2} &\cdots & T_{dd}
\end{bmatrix}\begin{bmatrix}\psi_1 \\ \psi_2 \\ \vdots \\\psi_d\end{bmatrix}
$$

where $\ket{m}$ is the basis for $\ket{\psi}$

Operators must be square.

## Observables

An observable is represented by a Hermitian operator acting on a Hilbert space.

## Symmetry/Unitary Operators

Represented by unitary operators. An operator $\hat{U}$ is unitary if

$$
\hat{U}^+\hat{U}=I
$$

inner products are also preserved if unitary

$$
\braket{\hat{U}\psi|\hat{U}\phi}=\braket{\psi|\phi}
$$

## Traces

Traces are just adding diagonals together

$$
tr(\hat{T})=\sum_n\bra{n}\hat{T}\ket{n}=\sum_nT_{nn}
$$

Properties:

$$
Tr(\hat{A}\hat{B})=Tr(\hat{B}\hat{A})\\
Tr(\hat{A}\hat{B}\hat{C})=Tr(\hat{B}\hat{C}\hat{A})=Tr(\hat{C}\hat{A}\hat{B})
$$

Note that $Tr(\hat{A}\hat{B}\hat{C})\neq Tr(\hat{A}\hat{C}\hat{B})$ → it must be cyclical permutation

$$
Tr(\alpha\hat{A}+\beta\hat{B})=\alpha Tr(\hat{A})+\beta Tr(\hat{b})
$$

## Determinants

Det is a function that we can apply to matrices to get a scalar. It’s defined for $n\times n$ only.

For a $2\times 2$ matrix it’s just

$$
det\begin{bmatrix}a & b \\ c & d\end{bmatrix}=ad-bc
$$

For an $n\times n$ matrix it can be done with cofactor expansion

$$
det(A)=\sum_{j=1}^n(-1)^{i+j}a_{ij}M_{ij}
$$

Note it’s recursive so it’s really expensive

also dont forget that

$$
det(\hat{A}\hat{B})=det(\hat{A})det(\hat B)
$$

An easier way to do it is through row reduction. Make a triangular matrix and multiply the diags together

$$
det\begin{pmatrix}a_{11}& * &  * \\
& a_{22} & *\\
0 & 0 & a_{33}
\end{pmatrix}=a_{11}a_{22}a_{33}
$$

### Invertibility of Matrices

Operator $\hat{T}$ (i.e., a matrix) is invertible if and only if $det(\hat{T})\neq0$

## Eigenvectors/Eigenvalues/Eigenspaces

[https://www.youtube.com/watch?v=PFDu9oVAE-g](https://www.youtube.com/watch?v=PFDu9oVAE-g)

$$
A\vec{v}=\lambda\vec{v}
$$

Basically if I apply matrix transformation $A$ to a vector $\ket{v}$ and it still points in the same direction, it is an Eigenvector. It could be multiplied by a scalar value $\lambda$ (Eigenvalue) after applying the transform, which means its magnitude need not be preserved by the transform. 

The set of all vector $\ket{v}$’s are Eigenvectors of transformation $A$.

An Eigenstate are states instead of vectors, operators instead of matrices but are the same thing.

$$
\hat{A}\ket{\psi}=\lambda\ket{\psi}
$$

## Subspaces

A [subset](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) $U\subseteq V$ is a subspace if it satisfies:

1. contains zero vector
2. closed under addition $\ket{u},\ket{v}\in U, \ket{u}+\ket{v}\in U$
3. closed under scalar multiplication $\ket{u}\in U, c\in \mathbb{F}\Rarr c\ket{u}\in U$

## Span Function

A span of vectors is the set of all linear combinations you can build from them

## Characteristic Polynomial

polynomial $p(\lambda)=\alpha_0\lambda^n+\alpha_1\lambda^{n-1}+...+\alpha_{n-1}\lambda^{1}+\alpha_n$ 

$$
p(\lambda)=det(A-\lambda I)
$$

Solving

$$
p(\lambda)=0
$$

Gives $\lambda$ values which are eigenvalues of A

## T-invariant subspaces

A [subspace](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) $U\subseteq V$ is called $\hat{T}$ invariant if operator $\hat{T}$ keeps everything in U inside U. If it is T-invariant, then this must always be true:

$$
\hat{T}(U)=\{\hat{T}\ket{\psi}|\ket{\psi}\in U\}\subseteq U
$$

Simplest T invariant subspace is (with dimensions $d$)

$$
U=span\{\ket{u}\}\\
\hat{T}\ket{y}=\lambda \ket{u}
$$

When $\lambda$ is Eigenvalue and $\ket{u}$ is eigenvector and $\ket{u}\neq 0$ and you can define these vectors by checking

$$
(\hat{T}-\lambda I)\ket{u}=0\\
0=det(\hat{T}-\lambda I)\\
=(\lambda_1-\lambda)(\lambda_2-\lambda)..(\lambda_d-\lambda)
$$

In general, this determinant has degree $\lambda_i$ are zeroes of character polynomial $\lambda_i\in C$ can be repeated

## Commutators

The commutator of two operators $\hat{A},\hat{B}$ is defined as

$$
[\hat{A},\hat{B}]=\hat{A}\hat{B}-\hat{B}\hat{A}
$$

If $[\hat{A},\hat{B}]=0$ then that means you can commute [matrix multiplication](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21).

# Lec 5

More math

## Adjoint

An adjoint is basically a conjugate transpose but for an operator (whereas a conjugate transpose can only be applied to a matrix)

Given operator $\hat{A}$, it’s adjoint is the operator $\hat{A}^+$ such that $\forall\ket{i},\ket{j}$

$$
\bra{i}\hat{A}^+\ket{j}=(\bra{j}\hat{A}\ket{i})^*\\
(\hat{A}^+)_{ij}=\hat{A}^*_{ji}
$$

Where, for any operator $\hat{O}$, a matrix element $\bra{i}\hat{O}\ket{j}$ is just the $(i,j)$-th element of the matrix representing $\hat{O}$ in basis $\{\ket{i}\}$

Note that $\ket{i}$ and $\ket{j}$ are arbitrary basis states

where $A^*$ is the complex conjugation of $A$

properties:

$$
(\hat{A}^+)^+=\hat{A}\\
(\hat{A}+\hat{B})^+=\hat{A}^++\hat{B}^+\\
(\hat{A}\hat{B})^+=\hat{B}^+\hat{A}^+
$$

Example:

Consider operator

$$
\hat{A}=\ket{1}\bra{2}+2i\ket{2}\bra{1}+3\ket{2}\bra{2}\\
\Rarr \text{adjoint of $\hat{A}$}=\ket{2}\bra{1}-2i\ket{1}\bra{2}+3\ket{2}\bra{2}
$$

So w.r.t. to basis $\{\ket{1},\ket{2}\}$, $\hat{A}$ is

$$
\hat{A}=\begin{pmatrix}
0 & 1\\
2i & 3

\end{pmatrix}
$$

The conjugate transpose of $\hat{A}=\hat{A}^+$ which is

$$
\hat{A}^+=\begin{pmatrix}
0 & -2i\\
1 & 3

\end{pmatrix}
$$

Which, once we pick an orthonormal basis, the matrix of $\hat{A}^+$ equals the conjugate transpose of the matrix of $\hat{A}$

$$
\hat{A}^+=\text{adjoint of $\hat{A}$}
$$

## Hermitian Operators

An operator is Hermitian if and only if the adjoint of the operator is equal to itself.

Properties

- all eigenvalues of a Hermitian operator are real
- All eigenvectors of a Hermitian operator form an orthonormal basis
- observables are usually some kind of Hermitian operator

The eigenvalues represent possible measurement outcomes. Orthonormal eigenstates $\ket{\alpha}$ mean that these are definite value states

## Positive Semi-Definite (PSD) Operators

An operator $\hat{P}$ is PSD if and only if

- $\hat{P}$ is Hermitian
- this holds true for all states $\ket{\psi}$ :

$$
\bra{\psi}\hat{P}\ket{\psi}\geq 0
$$

This means the angle between $\ket{\psi}$ and $\hat{P}\ket{\psi}$ is less than 90 degrees.

Example

- Projectors are PSD

### Projectors

A projector operator (aka. a projector) is a [projection](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) that 

$$
\Pi_u=\frac{\ket{u}\bra{u}}{\braket{u|u}}
$$

once i apply it to a state $v$, i get the projection of that state $v$ on state $u$

### Born’s Rule

If a quantum system is in state $\ket{\psi}$ and you measure observable $\hat{A}$ — the probability of getting eigenvalue $\lambda_\alpha$ (which corresponds to eigenstate $\ket{\alpha}$) is

$$
P_\alpha=|\braket{\alpha|\psi}|^2
$$

## Anti-Hermitian Operators

An operator is anti-hermitian if and only if

$$
\hat{B}^+=-\hat{B}
$$

note that if you do

$$
\hat{A}=i\hat{B}
$$

then $\hat{A}$ is Hermitian

Any operator $\hat{T}$ can be written as linear combination of Hermitian and anti-Hermitian operator.

$$
\hat{T}=\hat{A}+i\hat{B}\\
\hat{A}=\frac{\hat{T}+\hat{T}^+}{2}\\
\hat{B}=\frac{\hat{T}-\hat{T}^+}{2i}
$$

## Unitary Operator

An operator is unitary if and only if

$$
\hat{U}^+\hat{U}=\hat{U}\hat{U}^+=I
$$

- it preserves inner product

$$
\ket{\alpha '}=\hat{U}\ket{\alpha}\\
\ket{\beta'}=\hat{U}\ket{\beta}\\
\braket{\alpha'|\beta'}=\bra{\alpha}\hat{U}^+\hat{U}\ket{\beta}\\
=\bra{\alpha}I\ket{\beta}\\
=\braket{\alpha|\beta}
$$

- U is basis chagne between orthonormal basis because you can write $\hat{U}$ as
    - as chatgpt puts it: unitary matrices/operators represent a rotation or change of coordinates in Hilbert space, without changing lengths or angles.

$$
\hat{U}=\hat{U}I
$$

I can use completeness relation so that if

$$
\hat{U}\ket{\alpha_n}=\ket{\beta_n}
$$

then we can change basis

$$
\hat{U}\sum_n\ket{\alpha_n}\bra{\alpha_n}\\
=\sum_nU\ket{\alpha_n}\bra{\alpha_n}\\
=\sum_n\ket{\beta_n}\bra{\alpha_n}
$$

Both $\{\ket{\alpha_n}\}$ and $\{\ket{\beta_n}\}$ are orthonormal basis

## Probability Theory

probability space $\Sigma$ has points and elements and associated probabilities with them

example:

coin flip

$$
\sum=\{e:H,T\}\rarr\frac{1}{2}
$$

Sum of all probability of your space should be 1

$$
\sum P(\Sigma)=1
$$

We have a random variable $X$. You have an event in that random variable space called $x$. The probability of finding that event in that random variable distribution

$$
P(X)=\sum_{e\in V_x}P(e)
$$

where

$$
V_x=\{e:X(e)=x\}
$$

Note that the probabilities are always between 0 and 1

$$
0\leq P(x)\leq 1
$$

### Joint Random Variables

We have a joint random variable $(X,Y)$ and we want to find a pair of values

$$
P(x,y)=\sum_{x,y\in V_{x,y}}P(e)\\
V_{x,y}=\{e:X(e)=x, Y(e)=y\}
$$

If i have one variable, then the other one can be inferred from the other.

$$
P(X)=\sum_yP(x,y)\\
P(Y)=\sum_xP(x,y)
$$

### Conditional Probability

from a joint distribution → if I select $y$ for $Y$ with $P(Y)\neq 0$

What is the probability $x$ given $y$

$$
P(X|Y)=\frac{P(X,Y)}{P(Y)}
$$

Special case

If X, Y are independent (if X occurs, Y has no effect, and vice versa)

$$
P(X,Y)=P(X)P(Y)
$$

### Numerical Random Variables/Expected Value

Uncertainty of a certain measurement

- a numerical RV X labels events by values that are real numbers X.
- the mean or expected value

$$
\mathbb{E}[X]=\braket{X}=\sum_X X\cdot P(x)
$$

### Spread

How do we measure spread from $\mathbb{E}[X]$?

Let $\mu=\mathbb{E}[X]$

$$
Var(X)=\braket{(x-\mu)^2}=\braket{X^2}-2\mu\braket{X}+\mu^2\\
=\braket{X^2}-\braket{X}^2
$$

### Standard Deviation

it’s the square root of the variance

$$
\sigma=\sqrt{Var(X)}=\sqrt{\mathbb{E}[X^2]-\mathbb{E}[X]^2}
$$

## Expected Value of Observables

$$
\mathbb{E}(A)=\sum_nA_nP(n)\\
=\sum A_n|\braket{n|\psi}|^2\\
=\sum A_n\braket{\psi|n}\braket{n|\psi}\\
=\bra{\psi}\sum_n A_n\ket{n}\bra{n}\ket{\psi}\\
=\bra{\psi}\hat{A}\ket{\psi}\\
\triangleq\braket{\hat{A}}
$$

Another convientn reprsentation is 

$$
\hat{\rho}\triangleq\ket{\psi}\bra{\psi}\\
\Rarr \braket{\hat{A}}=tr(\hat{\rho}\hat{A})\\
=tr(\ket{\psi}\bra{\psi}\hat{A})\\
tr(\bra{\psi}\hat{A}\ket{\psi})
$$

where $tr$ is trace

### Trace

Tr(A) is only defined for a square matrix.

Given a square matrix $A$, 

$$
tr(A)=a_{11}+a_{22}+...+a_{nn}
$$

Note that

$$
tr(AB)=tr(BA)
$$

### Diagonalization

A matrix is diagonalizable if it has linearly independent eigenvectors which occurs if the geometric multiplicity (dimension of the eigenspace) equals the algebraic multiplicity (root multiplicity in the characterstic polynomial) for every eigenvalue.

If matrix $A$ is diagonalizable then it can be written as

$$
A=PDP^{-1}
$$

Where $D=diag(\lambda_1, … , \lambda_n)$

## Matrix Exponential/Spectral Theorem

The matrix exponential of [square matrix](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21) $X$ is defined by a power series

$$
e^X=\sum_{n=0}^\infin\frac{X^n}{n!}
$$

Properties of this

- differential equations
    - the function $U(t)=e^{tX}$ is the only unique soln. to

$$
\frac{dU}{dt}=XU(t)\quad U(0)=I
$$

- diagonalizable matrices → assuming X is a real symmetric matrix then we can diagonalize $X=PDP^{-1}$ with $D=diag(\lambda_1, … \lambda_n)$ then

$$
e^X=Pdiag(e^{\lambda_1},...,e^{\lambda_n})P^{-1}
$$

where $P$ is the basis matrix — a matrix whose columns are the eigenvectors $X$ w.r.t $\hat{A}$.

Specifically, if $v_1,v_2,…,v_n$ are eigenvectors of $X$ corresponding to eigenvalues $\lambda_1,\lambda_2,…,\lambda_n$ then

$$
P = \begin{bmatrix} | & | & & | \\ v_1 & v_2 & \cdots & v_n \\ | & | & & | \end{bmatrix}
$$

- Hermitian and skew-Hermitian matrices → if $H=H^+$ then $e^{iH}$ is unitary this means

$$
(e^{iH})^+e^{iH}=I
$$

## Pauli Matrices

Three matrices which are defined as

$$
\sigma^0=\sigma_0=I_2=\begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}\\
\hat{\sigma}_x=\sigma^1=\sigma_1=\begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix}\\
\hat{\sigma}_y=\sigma^2=\sigma_2=\begin{pmatrix}
0 & -i \\
i & 0
\end{pmatrix}\\
\hat{\sigma}_z=\sigma^3=\sigma_3=\begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix}
$$

Properties

- spacing

$$
\hat{\sigma}^2_i=I_2\quad \forall \quad i\in\{x,y,z\}
$$

- commutation

note that

The symbol $\varepsilon_{ijk}$ is the Levi-Civita symbol, an antisymmetric tensor that encodes signs based on the order of its indices. 

- in 3D

$$
\varepsilon_{ijk}=\begin{cases}
+1\quad \text{if $(i,j,k)$ is an even permutation of (1,2,3)}\\
-1\quad \text{if $(i,j,k)$ is an odd permutation of (1,2,3)}\\
0\quad\text{if any index repeats}

\end{cases}
$$

- in 2D

$$
\varepsilon_{ijk}=\begin{pmatrix}0 & 1 \\ -1 & 0\end{pmatrix}
$$

$$
[\sigma_i,\sigma_j]=2i\varepsilon_{ijk}\sigma_k
$$

where an “even” permutation is (1,2,3), (2,3,1), (3,1,2) and an “odd” is (2,1,3), (1,3,2), (3,2,1)

- anti commutation

Note that the anticommutator is 

$$
\{A,B\}=AB+BA
$$

$$
\{\sigma_i,\sigma_j\}=2\delta_{ij}I_2
$$

- completeness

$$
\sigma_0=I_2=\begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}
$$

the set $\{\sigma_0,\sigma_x,\sigma_y,\sigma_z\}$ spans all 2x2 complex matrices 

$$
\{I,X,Y,Z\}\quad\text{form a basiss for operator }L(\mathbb{C})^2
$$

where 

forms a basis for all 2x2 complex matrices. Any 2x2 matrix

$$
M=\sum_{\mu=0}^3c_\mu\sigma_\mu
$$

- whatever this is

$$
\vec{\sigma}=(X,Y,Z)\quad\text{are Hermitian}\\
\sigma^1=\sigma^x=X\\
\sigma^2=\sigma^y=Y\\
\sigma^3=\sigma^z=Z\\
X^2+Y^2+Z^2=I\\
tr(X)=tr(Y)=tr(Z)=0\\
XY=iZ, YZ=iX, ZX=iY\\
[X,Y]=2iZ,[Y,Z]=2iX, ...\\
YX=(XY)^+=(iZ)^+=-iZ
$$

and

$$
\hat{A}=a_0\sigma_0+a_1\sigma_x+a_2\sigma_y+a_3\sigma_z\quad a_i\in \mathbb{C}
$$

$\hat{A}\cdot\hat{B}$ can be expanded as

$$
\hat{A}\hat{B}=\sum_{i=0}^3c_i\sigma^i
$$

If $c_i\in\mathbb{R}$, then $\hat{A}$ is Hermitian

## Observable on a qubit

Any observable on a qubit can be written as

$$
\hat{A}=a_0\sigma_0+\vec{a}\vec{\sigma_{1,2,3}}
$$

You can think of $a_0\sigma_0$ as the scalar value and $\vec{a}\vec{\sigma_{1,2,3}}$ as it helps with the Bloch Sphere.

This can be written in spherical units too

$$
\hat{n}=(n_x,n_y,n_z)=(\sin\theta\cos\psi,\sin\theta\sin\psi,\cos\theta)
$$

spin along $\hat{n}$