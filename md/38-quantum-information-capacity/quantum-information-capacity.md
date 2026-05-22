# Quantum Information Capacity

A classical bit has 2 states: 0 and 1.
``` math
\{0,1\}
```

A qubit has infinite distinct states. Linear combination (superposition) of
``` math
\left\lvert \psi \right\rangle = \alpha\left\lvert 0 \right\rangle + \beta\left\lvert 1 \right\rangle
```

Example

We can let there be three states in [[quantum-system|spin-1/2]].
``` math
\left\lvert z+ \right\rangle\quad\text{british coming by land}
```
``` math
\left\lvert z- \right\rangle\quad\text{british coming by sea}
```
``` math
\left\lvert x+ \right\rangle\quad\text{british not coming}
```

So i can measure $`S_z`$ to be either $`+\hbar/2`$ or $`-\hbar/2`$.
If it is $`+\hbar/2`$, then the british are not coming by sea. If it is $`-\hbar/2`$, then the british are not coming by land.

I can also measure $`S_x`$ to be either $`+\hbar/2`$ or $`-\hbar/2`$.
If it is $`+\hbar/2`$, we don’t get any extra information as it could equally be either three. If it is $`-\hbar/2`$, then the british are coming either by land or sea.

How reliably can we distinguish between a set of quantum states that serve as signals?

Consider Alice and Bob. Alice sends quantum state to Bob and this state is living in some [[hilbert-spaces|Hilbert space]] $`H`$
``` math
\left\lvert \psi \right\rangle\in H\quad dim(H)=d
```

Alice encodes $`N`$ equally likely messages
``` math
\{\left\lvert \alpha \right\rangle\}_{\alpha=1}^N
```

Bob makes measurements in some [[basis-states|basis]]
``` math
\{\left\lvert k \right\rangle\}_{k=1}^{d'}
```

Bob measures a larger Hilbert space $`H'`$ because he doesn’t know the Hilbert space Alice is using.
``` math
H\subset H'\quad dim(H')=d'>d
```
Bob still needs to make a determination. But he still needs to make a decision on which of the $`N`$ messages sent.

Let
``` math
k=1,2,3,4,\cdots,d'\quad d'>N
```

for some of these outcomes you can get maybe you assign some like $`1,2`$ to be message 1 $`C_1`$ and $`3`$ to message 2 $`C_2`$, etc. then you need to cover all possibilities of the message Alice sends. You want to map the outcome to messages. Some of the bins may be empty.

The success probability for Bob to correctly distinguish the different messages.
``` math
P_s=\sum_{\alpha=1}^NP(\alpha)\sum_{k\in C_\alpha}P(outcome~k|\text{message $\alpha$ was sent})\\
```
Recall [[borns-rule]] that
``` math
=\sum_{\alpha =1}^N\frac{1}{N}\sum_{k\in C_\alpha}|\left\langle k|\alpha \right\rangle|^2
```
We want to try to upperbound this. Let $`\{\left\lvert \phi_n \right\rangle\}_{r=1}^d`$ be some [[orthonormality|orthonormal basis]] of $`H`$

We know that
``` math
\Pi\left\lvert \alpha \right\rangle=\left\lvert \alpha \right\rangle
```
And also
``` math
(\Pi\left\lvert \alpha \right\rangle)^\dag=\left\lvert \alpha \right\rangle^\dagger
```
``` math
\left\langle \alpha \right\rvert\Pi^\dag=\left\langle \alpha \right\rvert
```
``` math
\left\langle \alpha \right\rvert\Pi=\left\langle \alpha \right\rvert
```
So
``` math
P_s=\frac{1}{N}\sum_\alpha\sum_{k\in C_\alpha}\left\langle \alpha|k \right\rangle\left\langle k|\alpha \right\rangle\\
```
``` math
=\frac{1}{N}\sum_\alpha\sum_{k\in C_\alpha}\left\langle \alpha|\Pi|k \right\rangle\left\langle k|\Pi|\alpha \right\rangle\\
```
``` math
=\frac{1}{N}\sum_\alpha\sum_{k\in C_\alpha}\left\langle \alpha \right\rvert(\Pi\left\lvert k \right\rangle\left\langle k \right\rvert\Pi)\left\lvert \alpha \right\rangle
```
``` math
= \frac{1}{N}\sum_\alpha \sum_{k\in C_\alpha}tr(\left\langle \alpha \right\rvert\Pi\left\lvert k \right\rangle\left\langle k \right\rvert\Pi\left\lvert \alpha \right\rangle)\\
```
Using [[traces|trace]] cyclic property
``` math
= \frac{1}{N}\sum_\alpha \sum_{k\in C_\alpha}tr(\left\lvert \alpha \right\rangle\left\langle \alpha \right\rvert\cdot \Pi\left\lvert k \right\rangle\left\langle k \right\rvert\Pi)\\
```
``` math
\leq \frac{1}{N}\sum_\alpha \sum_{k\in C_\alpha}tr(\Pi\left\lvert k \right\rangle\left\langle k \right\rvert\Pi)\\
```
``` math
\leq \frac{1}{N}\sum_\alpha \sum_{k\in C_\alpha}tr(\Pi^2\cdot\left\lvert k \right\rangle\left\langle k \right\rvert)\\
```
``` math
\leq \frac{1}{N}tr(\Pi^2\sum_\alpha\sum_{k\in C_\alpha}\left\lvert k \right\rangle\left\langle k \right\rvert)\\
```
``` math
\leq \frac{1}{N}tr(\Pi^2I)\\
```
``` math
\leq\frac{1}{N}tr(\Pi)\\
```
Using [[traces|trace]] cyclic property and the fact that $`tr(\left\langle \phi_r|\phi_r \right\rangle)=\left\langle \phi_r|\phi_r \right\rangle`$ as it is a $`1\times 1`$ matrix.
``` math
\leq\frac{1}{N}tr(\sum_{r=1}^d\left\lvert \phi_r \right\rangle\left\langle \phi_r \right\rvert)
```
``` math
\leq\frac{1}{N}\sum_{r=1}^dtr(\left\langle \phi_r|\phi_r \right\rangle)
```
``` math
\leq\frac{1}{N}\sum_{r=1}^d\left\langle \phi_r|\phi_r \right\rangle
```
``` math
\leq\frac{1}{N}\sum_{r=1}^d1
```
``` math
\leq\frac{d}{N}
```
This means the probability of a successful decoding is at most the number of dimensions of the Hilbert space divided by the number of possible messages Alice can send
