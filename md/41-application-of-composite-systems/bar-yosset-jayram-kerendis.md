# Bar-Yossef, Jayram, and Kerenidis (2004)

Hidden Matching Problem
Application of quantum communication

Alice and Bob holds different inputs. Alice holds a bit [[strings|string]] with $n$ bits of data
$$
x \in \{0,1\}^n
$$
Bob holds matching disjoint pairs of indices $M$. Matching means that every index appears in exactly one pair 
example:
$$
M=\{(1,5), (2,6), (3,7), (4,8)\}
$$
Alice sends a message to Bob which Bob will output based on that message. 
Bob must output a triple $(i,j,x_i\oplus x_j)$ where
1. $(i,j)$ is a pair from his matching $M$ i.e., $(i,j)\in M$
2. $x_i\oplus x_j$ is the XOR of the two bits of $x$ at those indices

Bob doesn't need to give XORs for every pair just one pair of his choosing.

If Bob had to give XORs for all $n/2$ pairs, Alice would need to send all of $x$ and the problem wouldn't be interesting. The catch is that Alice needs to send just enough information that whichever pair Bob picks, he can compute that one XOR. We just need one pair from Bob. Since Alice doesn't know Bob's matching $M$, she has to send somethign that works for any possible pair, but Bob only extracts one bit of XOR information.

Classically, we'd need to send $\Omega(\sqrt{n})$ bits. 

In QM, we'd only need to send $O(\log n)$ [[qubit|qubits]]. Alice can encode all of $x$ into amplitudes of a [[ket-states|quantum state]] on only $\log_2 n$ qubits and send that.

Alice prepares
$$
\ket{\psi_x} = \tfrac{1}{\sqrt{n}}\sum_{i=1}^{n} (-1)^{x_i}\ket{i}
$$
Bob measures $\ket{\psi_x}$ in the [[basis-states|basis]]
$$
\left\{\frac{1}{\sqrt{2}}(\ket{i}\pm\ket{j})\quad|\quad(i,j)\in M\right\}
$$
$$
\ket{h_+^{ij}} = \tfrac{1}{\sqrt{2}}\big(\ket{i} + \ket{j}\big), \quad \ket{h_-^{ij}} = \tfrac{1}{\sqrt{2}}\big(\ket{i} - \ket{j}\big)
$$
so
$$
\langle h_+^{ij}|\psi_x\rangle = \tfrac{1}{\sqrt{2n}}\big((-1)^{x_i} + (-1)^{x_j}\big)
$$
$$
\langle h_-^{ij}|\psi_x\rangle = \tfrac{1}{\sqrt{2n}}\big((-1)^{x_i} - (-1)^{x_j}\big)
$$

this measurement returns a pair $(i,j)\in M$ and a sign that equals $(-1)^{x_i\oplus x_j}$. Given this, then Bob can output $(i,j,x_i\oplus x_j)$ correctly as
$$
(-1)^{x_i\oplus x_j}=+1\Rightarrow x_i\oplus x_j=0
$$
$$
(-1)^{x_i\oplus x_j}=-1\Rightarrow x_i\oplus x_j=1
$$
so Bob's measurement outcome can tell him exactly the XOR $x_i\oplus x_j$

Further applications:
1. Quantum money - Gavinsky (2011)
2. Secure Voting - Khabiboulline et al. (2021)
