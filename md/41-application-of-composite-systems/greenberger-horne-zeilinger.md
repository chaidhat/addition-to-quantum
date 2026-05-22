# Greenberger, Horne, and Zeilinger (1989)
This exploits [[bells-theorem|Bell's Theorem]]

Let there be Alice, Bob and Charlie. Each get a single-bit prompt
$$
x,y,z\in \{0,1\}
$$
They are allowed a single bit
$$
a,b,c\in\{\pm 1\}
$$
No communication between them is allowed once the game starts.

Before the game starts, they can agree on a strategy and share resources. But after the prompt comes in, they are isolated.

The referee picks one of four prompts uniformly at randomly (25% chance of picking one)

| $x$ | $y$ | $z$ | required $abc$ |
| --- | --- | --- | -------------- |
| 0   | 0   | 0   | $-1$           |
| 1   | 1   | 0   | $+1$           |
| 0   | 1   | 1   | $+1$           |
| 1   | 0   | 1   | $+1$           |
$x$ is given to Alice, $y$ is given to Bob, $z$ is given to Charlie
These four are valid as the parity is 0, i.e.,
$$
x\oplus y \oplus z = 0
$$
So basically
$$
abc = \begin{cases} -1 & \text{if } x+y+z = 0 \\ +1 & \text{if } x+y+z = 2 \end{cases}
$$
Local realism caps this at 75% as classically if they were to guess, there would be 2^2=4 possible functions per player and 4^3=64 total strategies. Can any of them win all four scenarios? There are no strategies that win all of the time. The best that one can do is 75%.

Quantum strategy allows Alice, Bob and Charlie to share the GHZ state
$$
\ket{\text{GHZ}} = \tfrac{1}{\sqrt{2}}\big(\ket{000} - \ket{111}\big)
$$

If you receive a 0 bit, then measure $\sigma^X$ otherwise if you receive a 1 bit, then measure $\sigma^Y$
This turns the GHZ state of all four operator products 
$\sigma^X\sigma^X \sigma^X$ and $\sigma^X \sigma^Y\sigma^Y$ and all its cyclic permutations.

These all have the right eigenvalues to win every scenario with probability one.

## The strategy
Promote $a_i, b_i, c_i$ to be observables $\hat{A_i},\hat{B_i},\hat{C_i}$
Let
$$
\hat{A}_0=\hat{B}_0=\hat{C}_0=\sigma^X
$$
$$
\hat{A}_1=\hat{B}_1=\hat{C}_1=\sigma^Y
$$
These all mutually commutes
$$
\sigma^X\otimes \sigma^X \otimes \sigma^X=-1
$$
$$
\sigma^Y\otimes \sigma^Y\otimes \sigma^X = +1
$$
and all cyclic permutations...

Because
$$
\sigma^X\sigma^X\sigma^X\ket{\psi}=-\ket{\psi}\quad \sigma^Y\sigma^Y\sigma^X\ket{\psi}=\ket{\psi}
$$
hence the win percentage is 100%.
